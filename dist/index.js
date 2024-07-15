"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getClassDetails(applicationId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://octopod.co.in/ajax/validate/application`, {
                params: {
                    AcademyID: 769,
                    Year: 3006,
                    applicationId: applicationId,
                    contactNumber: "bhupendra.yadav.che22@iitbhu.ac.in",
                    otp: 575840,
                },
                headers: {
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
                    Accept: "application/json, text/javascript, */*; q=0.01",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Accept-Encoding": "gzip, deflate, br, zstd",
                    "X-Requested-With": "XMLHttpRequest",
                    Connection: "keep-alive",
                    Referer: "https://octopod.co.in/iitbhu/semester-fees",
                    Cookie: "your-cookie-string-here",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin",
                },
            });
            // Validate response data structure before accessing properties
            const data = response.data;
            if (!data) {
                throw new Error("Invalid response data");
            }
            yield prisma.class.create({
                data: {
                    Address: data.AddressLine1,
                    Annual_Income: data.AnnualIncome,
                    bloodgrp: data.BloodGroup,
                    Category: data.Category,
                    ContactNo: data.ContactNo,
                    DOB: data.BirthDate,
                    email: data.EmailAddress,
                    gender: data.Gender,
                    name: data.FirstName,
                    Rank: data.LastSchoolPercent,
                    State: data.PState,
                    Uniqueid: data.GRNumber,
                    ZipCode: data.ZipCode,
                },
            });
        }
        catch (error) {
            console.error(`Error processing applicationId ${applicationId}:`, error);
        }
    });
}
// Example usage to process a range of application IDs
function processRange(startId, endId) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = startId; i <= endId; i++) {
            yield getClassDetails(i);
        }
    });
}
// Adjust your range accordingly
processRange(23045001, 23045200);
