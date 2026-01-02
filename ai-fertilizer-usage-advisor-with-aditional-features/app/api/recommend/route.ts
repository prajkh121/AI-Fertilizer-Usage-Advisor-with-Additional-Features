import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      crop,
      stage,
      nitrogen,
      phosphorus,
      potassium,
      ph,
      landSize,
      landUnit,
      language,
      additionalInfo,
    } = body;

    const prompt = `
You are an agricultural fertilizer expert.

Analyze the following data and give fertilizer recommendations.

Crop Type: ${crop}
Growth Stage: ${stage}
Soil Nutrients:
- Nitrogen (N): ${nitrogen}
- Phosphorus (P): ${phosphorus}
- Potassium (K): ${potassium}
Soil pH: ${ph}
Land Size: ${landSize} ${landUnit}

Additional Info: ${additionalInfo || "None"}

Respond in ${language}.

Give output in this format:
1. Fertilizer Type
2. Quantity per ${landUnit}
3. Total Quantity for entire land
4. Best Time to Apply
5. Reason for recommendation
6. Cost-saving tip

Use simple, farmer-friendly language.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const aiText =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini";

    return NextResponse.json({
      success: true,
      data: aiText,
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error.response?.data || error.message);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate fertilizer recommendation",
      },
      { status: 500 }
    );
  }
}
