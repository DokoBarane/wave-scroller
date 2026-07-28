export type AgencyContact = {
  name: string;
  role: string;
  email: string;
  office?: string;
  mobile?: string;
};

export type AgencyOffice = {
  country: string;
  location: string;
  company: string;
  address: string;
  contacts: AgencyContact[];
};

export const agencyNetwork: AgencyOffice[] = [
  {
    country: "Bangladesh",
    location: "Chittagong",
    company: "Total Transportation Limited",
    address:
      "BM Heights (4th Floor), 318 Sheikh Mujib Road, Agrabad C/A, Chattogram",
    contacts: [
      {
        name: "Mr. Tohidul Islam",
        role: "EQP",
        email: "tohidul.islam@ctg.mghgroup.com",
        mobile: "+880 1700706942",
      },
      {
        name: "Mr. Sayeem Salahuddin",
        role: "Import CRM & Documentation",
        email: "sayeem.salahuddin@ctg.mghgroup.com",
        mobile: "+880 1700706942",
      },
    ],
  },
  {
    country: "India",
    location: "Chennai",
    company: "Vyom Shipping India Private Limited",
    address:
      "Unit No. 12, Wellingdon Estate, 2nd Floor, No. 53 Ethiraj Salai, Egmore, Chennai 600008",
    contacts: [
      {
        name: "Mr. Durai Selvam",
        role: "Documentation - Import - Export",
        email: "docs1.sg@vyomshipping.com",
        mobile: "+91 9710944366",
      },
      {
        name: "Mr. Karthick",
        role: "Logistics",
        email: "ttklogs1@tanktainer.com",
        mobile: "+91 9566212481",
      },
    ],
  },
  {
    country: "India",
    location: "Visakhapatnam",
    company: "Focus Trans Tech Shipping Pvt Ltd",
    address:
      "402, Level 4, DNO: 9-29-19/A, Waltair Heights, Balaji Nagar, Siripuram, Visakhapatnam 530003",
    contacts: [
      {
        name: "Mr. Vasu",
        role: "Operations",
        email: "vasu@focusshipping.com",
        office: "+91-891 2751755",
        mobile: "+91 9676477735",
      },
    ],
  },
  {
    country: "India",
    location: "Nhava Sheva",
    company: "Ristar Logistics Pvt Ltd",
    address:
      "Office No. C-0010, Akshar Business Park, Plot No. 3, Sector 25, Vashi, Navi Mumbai 400703",
    contacts: [
      {
        name: "Mr. Rahul J Bhangre",
        role: "Director",
        email: "rahul.b@ristarlogistics.com",
        office: "022-40057713",
        mobile: "+91 9833111749",
      },
      {
        name: "Mr. Ravi Nathani",
        role: "Imports",
        email: "import@ristarlogistics.com",
        office: "022-40057713",
        mobile: "+91 9737493317",
      },
    ],
  },
  {
    country: "India",
    location: "Mundra",
    company: "Ristar Logistics Pvt Ltd",
    address:
      "Office No. 315, Second Floor, Plot No. 02, Sector 8, Shreenath Heights, Gandhidham - Kutch 370201",
    contacts: [
      {
        name: "Mr. Vishal Dakhore",
        role: "Accounts",
        email: "accounts@ristarlogistics.com",
        mobile: "+91 9821107033",
      },
    ],
  },
  {
    country: "Indonesia",
    location: "Belawan",
    company: "PT. Vyom Global Logistik Indonesia (Belawan Office)",
    address:
      "Mandiri Building 6th Floor Unit 607, Jl. Imam Bonjol No. 16D, Medan 20112",
    contacts: [],
  },
  {
    country: "Indonesia",
    location: "Jakarta",
    company: "PT. Vyom Global Logistik Indonesia (Jakarta Office)",
    address:
      "The Kensington Office Tower, 3rd Floor Unit E, Kelapa Gading Timur, Jakarta Utara, DKI Jakarta 14240",
    contacts: [],
  },
  {
    country: "Indonesia",
    location: "Surabaya",
    company: "PT Monter Global Indonesia",
    address:
      "Sinarmas Land Plaza, Lt 15 Unit 1517, Jln Pemuda 60-70, Genteng, Surabaya 60271",
    contacts: [],
  },
  {
    country: "Taiwan",
    location: "Kaohsiung",
    company: "Kong Hou Enterprise Co., Ltd.",
    address:
      "12F, No.303, Sec. 4, Zhongxiao E. Rd., Daan Dist, Taipei City 106078, Taiwan",
    contacts: [
      {
        name: "General Desk",
        role: "Agency Coordination",
        email: "konghou@khenterprise.com.tw",
        office: "886-2-2369-7668",
      },
    ],
  },
  {
    country: "Malaysia",
    location: "Pasir Gudang",
    company: "Unify Shipping Services Sdn Bhd",
    address: "89-02, Jalan Molek 3/1, Taman Molek, 81100 Johor Bahru, Johor, Malaysia",
    contacts: [],
  },
  {
    country: "Malaysia",
    location: "Penang",
    company: "Unify Shipping Services Sdn Bhd",
    address:
      "Suite 18.07, 18th Floor, MWE Plaza, No.8 Lebuh Farquhar, 10200 Penang, Malaysia",
    contacts: [],
  },
  {
    country: "Malaysia",
    location: "Port Klang",
    company: "Vyom Logistics Sdn Bhd",
    address:
      "Suite 11-05, Menara Trend, Intan Millenium Square, 68 Jalan Batai Laut 4, Klang 41300, Selangor, Malaysia",
    contacts: [],
  },
  {
    country: "Pakistan",
    location: "Karachi",
    company: "The Bulkers",
    address: "252-B, PECHS Block 6, Karachi, Pakistan",
    contacts: [],
  },
  {
    country: "Singapore",
    location: "Singapore",
    company: "Vyom Global Logistics (S) Pte Ltd",
    address: "#02-05, Southpoint, 200 Cantonment Road, Singapore 089763",
    contacts: [
      {
        name: "Ms. Marina",
        role: "General Manager",
        email: "marina@vyomshipping.com",
        mobile: "+65 92723370",
      },
      {
        name: "Mr. Kenny",
        role: "Commercial",
        email: "kenny@tanktainer.com",
        mobile: "+65 88817170",
      },
    ],
  },
  {
    country: "Sri Lanka",
    location: "Colombo",
    company: "Mount Shipping Agencies (Pvt) Ltd",
    address: "2nd Floor, No. 9, Nimal Road, Colombo 04, Sri Lanka",
    contacts: [
      {
        name: "Anujath Fernando",
        role: "Managing Director",
        email: "anujath@mountshipping.com",
        office: "+94 115 378049",
        mobile: "+94 777343820",
      },
      {
        name: "Nirmalee Mendis",
        role: "General Manager",
        email: "nirmalee@mountshipping.com",
        mobile: "+94 777877129",
      },
    ],
  },
  {
    country: "Thailand",
    location: "Bangkok & Laem Chabang",
    company: "Vyom Global Logistics (Thailand) Ltd.",
    address:
      "Unit 15C, 15th Floor, Sathorn Thani Building 1, 90/38-90/39 North Sathon Road, Silom, Bangrak, Bangkok 10500, Thailand",
    contacts: [
      {
        name: "Mr. Suresh",
        role: "Director",
        email: "kbs@vyomshipping.com",
        mobile: "+66 653615955",
      },
      {
        name: "Ms. Namthip Burintanachat",
        role: "Branch Manager",
        email: "namthip@vyomshipping.com",
      },
    ],
  },
  {
    country: "Vietnam",
    location: "Ho Chi Minh",
    company: "Maxwell Logistics Co., Ltd",
    address: "25/12/43 Bui Quang La Street, An Hoi Tay Ward, Ho Chi Minh City, Vietnam",
    contacts: [
      {
        name: "Nguyen Canh Tuyen",
        role: "Managing Director",
        email: "thommy.tuyen@maxwell.vn",
        office: "(84-28) 626 16249",
        mobile: "0906 300 465",
      },
      {
        name: "Nguyen Thi Thu Trang",
        role: "Operation Manager",
        email: "ops@maxwell.vn",
        mobile: "0927 625 270",
      },
    ],
  },
  {
    country: "China",
    location: "Qingdao",
    company: "Shanghai Manta International Logistics Co., Ltd",
    address:
      "Room 204, Block K, Lane 921 Xinshen Road, Chongming District, Shanghai, China",
    contacts: [
      {
        name: "Tina Xu",
        role: "CEO",
        email: "tina.xu@manta-logistics.com",
        mobile: "+86 13705132662",
      },
      {
        name: "Sam Chen",
        role: "Tank Fleet Manager",
        email: "op01@manta-logistics.com",
        mobile: "+86 19129910865",
      },
    ],
  },
];

export const agencyCountries = Array.from(
  new Set(agencyNetwork.map((office) => office.country)),
).sort((a, b) => a.localeCompare(b));

export function officeSearchText(office: AgencyOffice) {
  return [
    office.country,
    office.location,
    office.company,
    office.address,
    ...office.contacts.map((contact) =>
      [contact.name, contact.role, contact.email, contact.office, contact.mobile]
        .filter(Boolean)
        .join(" "),
    ),
  ]
    .join(" ")
    .toLowerCase();
}
