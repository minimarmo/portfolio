const projects = [
  {
    id: "stock-management",
    title: "Stock Management PWA",
    shortDescription:
      "Simple stock tool with barcode scan, sales tracking, and installable like an app (PWA).",
    description:
      "This project started from my curiosity to try building a PWA — something lightweight, easy to install like a real app, and simpler to build compared to Flutter. The main goal of this web app is to help manage stock by scanning products into inventory, logging sales, and tracking item movement. Nothing too complex — just a straightforward tool that does the job. I also took this chance to try out Chakra UI for the interface, and I really liked how clean and easy it is to use.",
    stack: [
      "React + TypeScript",
      "Chakra UI",
      "Supabase",
      "Barcode scanning: @zxing/browser",
      "Vite + vite-plugin-pwa",
    ],
    thumbnail: "/portfolio/images/projects/stock-management/stock-demo.png",
    imageUrls: [
      "/portfolio/images/projects/stock-management/1_Open_Link.jpg",
      "/portfolio/images/projects/stock-management/2_Add_To_HomeScreen.jpg",
      "/portfolio/images/projects/stock-management/3_Show_App.jpg",
      "/portfolio/images/projects/stock-management/4_List_Page.jpg",
      "/portfolio/images/projects/stock-management/5_Add_Page.jpg",
      "/portfolio/images/projects/stock-management/6_Sell_Page.jpg",
      "/portfolio/images/projects/stock-management/7_Access_Camera.jpg",
      "/portfolio/images/projects/stock-management/8_Report.jpg",
    ],
    demoUrl: "https://minimarmo.github.io/stock-management",
    sourceUrl: "https://github.com/minimarmo/stock-management",
    prototypeUrl: "",
  },
  {
    id: "qgis-plugin",
    title: "Polygon to Point (QGIS Plugin)",
    shortDescription:
      "Convert polygon layers to points with selected fields — all inside QGIS.",
    description:
      "Before moving into frontend development, I had some Python background and also worked with GIS data. This plugin was built to solve a real pain point from my previous work. We often received messy location data in polygon format, while the system we used required clean point data with specific fields. This tool helps automate the process — converting polygons to points and letting users choose the fields they want. It removes the need to manually build matching schemas, write custom queries, or clean up attribute tables. Overall, it saved us a lot of time and made the workflow in QGIS much smoother.",
    stack: ["Python", "PyQGIS", "Qt", "QGIS"],
    thumbnail: "/portfolio/images/projects/qgis-plugin/4_Fill_Data.png",
    imageUrls: [
      "/portfolio/images/projects/qgis-plugin/1_Info.png",
      "/portfolio/images/projects/qgis-plugin/2_Polygon_Layer.png",
      "/portfolio/images/projects/qgis-plugin/3_Open_Plugin.png",
      "/portfolio/images/projects/qgis-plugin/4_Fill_Data.png",
      "/portfolio/images/projects/qgis-plugin/5_Example_Result.png",
    ],
    demoUrl: "",
    sourceUrl: "https://github.com/minimarmo/polygon-to-point",
    prototypeUrl: "",
  },
  {
    id: "asset-tracking-system",
    title: "Asset Tracking System",
    shortDescription:
      "An internal system for tracking assets with both website and mobile app",
    description:
      "This project was built to help track assets — where they’ve been sent, where they are now, and their movement history. It includes both a dashboard for admin use and mobile app functionality for on-the-go asset scanning and updates. I didn’t start this project from scratch — I took over after the demo version was released. Initially, I was responsible for the web side, especially improving the dashboard. The whole UI was redesigned using Ant Design for consistency, and we used Refine to build fast CRUD interfaces. It worked well at first, but as data grew, performance issues arose. Refine’s pagination conflicted with Appwrite’s API limits, so I eventually rewrote the entire data-fetching layer using plain React to improve speed and reliability. About a year later, I also took over the mobile app, which was built with Flutter. This was my first real experience maintaining a mobile project — I adjusted the UI, fixed logic, and published to both App Store and Play Store. I also had to deal with tricky parts like emulator vs. real device behavior, permission handling, and writing proper privacy policies. This project gave me deep insights into both frontend web development and real-world mobile deployment. It really showed me how much more complex mobile apps can be — dealing with screen sizes, OS versions, and platform rules — compared to web apps.",
    stack: ["Refine", "React", "Ant Design", "Exceljs", "pdflib", "Appwrite"],
    thumbnail: "/portfolio/images/projects/asset-tracking-system/figma_ui.png",
    imageUrls: [
      "/portfolio/images/projects/asset-tracking-system/figma_ui.png",
    ],
    demoUrl: "",
    sourceUrl: "",
    prototypeUrl:
      "https://www.figma.com/proto/xhc5YZl64cpuxwgYikZ6cq/Re-Design-ATS?node-id=79-17&p=f&t=TN5YtcE3bjhnajtb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: "leasing-system",
    title: "Leasing System",
    shortDescription:
      "A document-focused app for managing leasing contracts, built end-to-end",
    description:
      "This was the first major project I handled from start to finish — from gathering requirements to delivering the final product. It’s a web-based system for generating and managing leasing documents such as quotations, contracts, invoices, receipts, and reports. At the time, I had very limited experience with leasing or even car-related businesses. The dev team was small, so I had to take full ownership — designing the data schema, building the frontend, and even writing cron jobs. One of the biggest challenges wasn’t just the business logic, but the complexity of document generation. The system had to create dynamic PDFs and Excel files with highly specific formatting and calculations. I spent about a week just learning the leasing workflows and how the financial calculations worked. Despite having only two months of coding experience at the time, I pushed myself to deliver all document types the client needed. It took nearly a year, but in the end, the app was fully deployed and is still in use today. This project taught me how to go beyond UI — mastering the details of document generation with tools like pdf-lib and exceljs, and ensuring everything matched the client’s real-world process.",
    stack: ["Refine", "React", "Ant Design", "Exceljs", "pdflib"],
    thumbnail: "/portfolio/images/projects/leasing-system/example.png",
    imageUrls: ["/portfolio/images/projects/leasing-system/example.png"],
    demoUrl: "",
    sourceUrl: "",
    prototypeUrl:
      "https://www.figma.com/proto/xhc5YZl64cpuxwgYikZ6cq/Re-Design-ATS?node-id=79-17&p=f&t=TN5YtcE3bjhnajtb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: "nx-usage-dashboard",
    title: "NX Usage Dashboard",
    shortDescription:
      "A Power BI dashboard to analyze license usage and support cost-saving decisions",
    description:
      "This dashboard was created to help the marketing and management teams understand how NX software licenses are being used. I was initially asked to build a web app, but I proposed using Power BI instead for faster insights and better visual storytelling. I wrote scripts to collect log data (package name, licenses issued/used, and user activity) and pushed it to Appwrite. Then, I connected Power BI to Appwrite via HTTP to keep the data updated without building a backend. The dashboard answers key questions like whether the company should purchase more licenses or reduce unused ones. It includes hourly usage trends, top users, underused licenses, and a smart alert system to guide decisions — helping the team make cost-saving calls based on real usage data.",
    stack: ["Power BI", "Appwrite", "NOCODB", "Python"],
    thumbnail: "/portfolio/images/projects/powerbi-dash/nx_usage.png",
    imageUrls: ["/portfolio/images/projects/powerbi-dash/nx_usage.png"],
    demoUrl: "",
    sourceUrl: "",
    prototypeUrl: "",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    shortDescription:
      "A portfolio design project exploring UX/UI from a developer's perspective",
    description:
      "This project wasn't about code — it was about exploring UX/UI design as a developer. I created this portfolio concept during some free time, using it as a chance to understand design principles and workflows. As a developer, I wanted to prove that we can also think in terms of user experience and interface, even without flashy animations or designer-level polish. I learned that having a clear design before coding can save a lot of development time — it helps visualize the structure, align components, and guide the direction of the entire site. The prototype was made in Figma and reflects how I approached layout, component reuse, and consistency across the site.",
    stack: ["Figma", "React", "Tailwind Css"],
    thumbnail: "/portfolio/images/projects/portfolio/2_ui.png",
    imageUrls: [
      "/portfolio/images/projects/portfolio/1_ux.png",
      "/portfolio/images/projects/portfolio/2_ui.png",
    ],
    demoUrl: "",
    sourceUrl: "",
    prototypeUrl:
      "https://www.figma.com/proto/ZUQx2SMPV4xcMhjIGTTVwI/Portfolio?node-id=74-156&t=MvnzjLLrZPImoXD1-1",
  },
  {
    id: "leave-request-app",
    title: "Leave Request Approval",
    shortDescription:
      "Power Apps & Automate solution for managing leave approval workflows",
    description:
      "This project started as a way for me to explore Microsoft Power Apps, Power Automate, and SharePoint. I wanted to build something practical, so I designed a basic leave request system — a great starter use case for learning how these tools work together. The app lets employees submit leave requests, which then trigger email notifications to approvers at each level. Approvers can click a direct link in the email to open the form and take action. The system handles role-based visibility, status tracking, and automates the entire workflow. Through this project, I gained a solid understanding of how to integrate Power Platform components effectively.",
    stack: ["Power Apps", "Power Automate", "SharePoint"],
    thumbnail: "/portfolio/images/projects/leave-request-app/3_scrEdit.png",
    imageUrls: [
      "/portfolio/images/projects/leave-request-app/1_scrList.png",
      "/portfolio/images/projects/leave-request-app/2_scrCreate.png",
      "/portfolio/images/projects/leave-request-app/3_scrEdit.png",
      "/portfolio/images/projects/leave-request-app/4_automateFlow.png",
    ],
    demoUrl: "",
    sourceUrl: "",
    prototypeUrl: "",
  },
];

export default projects;
