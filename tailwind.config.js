export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      error: "#EB5757",
      success: "#27AE60",
      warning: "#E2B93B",
      "green-dark-1": "#D6F6DE",
      "green-dark-2": "#BAF0C7",
      "green-dark-3": "#97E8AB",
      "green-dark-4": "#75E090",
      "green-dark-5": "#53D974",
      "green-dark-6": "#30D158",
      "green-dark-7": "#28AE49",
      "green-dark-8": "#208B3B",
      "green-dark-9": "#18692C",
      "green-dark-10": "#10461D",
      "green-dark-11": "#0A2A12",
      "green-dim-1": "#D3E5D7",
      "green-dim-2": "#B5D4BD",
      "green-dim-3": "#90BE9C",
      "green-dim-4": "#6CA87B",
      "green-dim-5": "#47935A",
      "green-dim-6": "#227D39",
      "green-dim-7": "#1C6830",
      "green-dim-8": "#175326",
      "green-dim-9": "#113F1D",
      "green-dim-10": "#0B2A13",
      "green-dim-11": "#07190B",
      "green-light-1": "#D6F4DE",
      "green-light-2": "#BBECC8",
      "green-light-3": "#99E3AC",
      "green-light-4": "#78DA90",
      "green-light-5": "#56D075",
      "green-light-6": "#34C759",
      "green-light-7": "#2BA64A",
      "green-light-8": "#23853B",
      "green-light-9": "#1A642D",
      "green-light-10": "#11421E",
      "green-light-11": "#0A2812",
      "black-1": "#CCCCCC",
      "black-2": "#AAAAAA",
      "black-3": "#808080",
      "black-4": "#555555",
      "black-5": "#2B2B2B",
      "black-6": "#000000",
      "white-1": "#FFFFFF",
      "white-2": "#D4D4D4",
      "white-3": "#AAAAAA",
      "white-4": "#808080",
      "white-5": "#555555",
      "white-6": "#333333",
      transparent: "transparent",
    },
    fontFamily: {
      rogan: "Rogan",
    },
    extend: {
      boxShadow: {
        "variant-1": "-8px 8px 20px 0px rgba(0, 0, 0, 0.25)",
        "variant-2": "-8px 16px 24px 0px #00000014",
        "variant-3": "5px 5px 50px 0px #1A202C0F",
      },
      fontSize: {
        "title-1": [
          "45px",
          {
            lineHeight: "52px",
            fontFamily: "Rogan",
            fontWeight: "700",
          },
        ],
        "title-2": [
          "39px",
          {
            lineHeight: "47px",
            fontFamily: "Rogan",
            fontWeight: "700",
          },
        ],
        "title-3": [
          "32px",
          {
            lineHeight: "40px",
            fontFamily: "Rogan",
            fontWeight: "700",
          },
        ],

        "title-4": [
          "24px",
          {
            lineHeight: "32px",
            fontFamily: "Rogan",
            fontWeight: "700",
          },
        ],

        "title-5": [
          "18px",
          {
            lineHeight: "24px",
            fontFamily: "Rogan",
            fontWeight: "700",
          },
        ],
        "title-6": [
          "16px",
          {
            lineHeight: "20px",
            fontFamily: "Rogan",
            fontWeight: "700",
          },
        ],
        "sub-3": [
          "45px",
          {
            lineHeight: "52px",
            fontFamily: "Rogan",
            fontWeight: "500",
          },
        ],

        "sub-4": [
          "24px",
          {
            lineHeight: "32px",
            fontFamily: "Rogan",
            fontWeight: "500",
          },
        ],

        "sub-5": [
          "18px",
          {
            lineHeight: "24px",
            fontFamily: "Rogan",
            fontWeight: "500",
          },
        ],
        "sub-6": [
          "16px",
          {
            lineHeight: "20px",
            fontFamily: "Rogan",
            fontWeight: "500",
          },
        ],
        "body-1": [
          "24px",
          {
            lineHeight: "28px",
            fontFamily: "Rogan",
            fontWeight: "400",
          },
        ],
        "body-2": [
          "20px",
          {
            lineHeight: "28px",
            fontFamily: "Rogan",
            fontWeight: "400",
          },
        ],
        "body-3": [
          "18px",
          {
            lineHeight: "28px",
            fontFamily: "Rogan",
            fontWeight: "400",
          },
        ],
        "body-4": [
          "16px",
          {
            lineHeight: "24px",
            fontFamily: "Rogan",
            fontWeight: "400",
          },
        ],
        "body-5": [
          "14px",
          {
            lineHeight: "20px",
            fontFamily: "Rogan",
            fontWeight: "400",
          },
        ],
        "body-6": [
          "12px",
          {
            lineHeight: "18px",
            fontFamily: "Rogan",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
