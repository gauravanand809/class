import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getClassDetails(applicationId: number) {
  try {
    const response = await axios.get(
      `https://octopod.co.in/ajax/validate/application`,
      {
        params: {
          AcademyID: 769,
          Year: 3006,
          applicationId: applicationId,
          contactNumber: "bhupendra.yadav.che22@iitbhu.ac.in",
          otp: 575840,
        },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
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
      }
    );

    // Validate response data structure before accessing properties
    const data = response.data;

    if (!data) {
      throw new Error("Invalid response data");
    }

    await prisma.class.create({
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
  } catch (error) {
    console.error(`Error processing applicationId ${applicationId}:`);
  }
}

// Example usage to process a range of application IDs
async function processRange(startId: number, endId: number) {
  for (let i = startId; i <= endId; i++) {
    await getClassDetails(i);
  }
}

// Adjust your range accordingly
processRange(22000001, 23000001);
