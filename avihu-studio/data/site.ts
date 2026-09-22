const addressLines = ["העצמאות 21, נחלת יהודה", "ראשון לציון", "בתוך המרכז"];
const whatsappNumber = "972548120581";
const whatsappMessage = "היי אביהו, הגעתי מהאתר";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const site = {
  name: "אביהו מרוז",
  location: addressLines.join(", "),
  addressLines,
  phone: "0548120581",
  phoneDisplay: "054-8120581",
  whatsapp: whatsappNumber,
  whatsappMessage,
  whatsappUrl,
  instagram: "https://www.instagram.com/avihumeroz/",
  instagramUsername: "@avihumeroz",
  bookingUrl:
    "https://customers.dibs-app.com/business-page/685db588ee830fa7dfc95252",
  academyUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeGwujn0vj7syJ93RcjXl31movrfMIycc6W4qKAOZEnfJo2uQ/viewform?pli=1",
};
export const navigation = [
  ["ראשי", "home"],
  ["אביהו", "about"],
  ["עבודות", "gallery"],
  ["שירותים", "services"],
  ["האקדמיה", "academy"],
  ["המלצות", "testimonials"],
  ["יצירת קשר", "contact"],
];
export const categories = [
  "הכול",
  "תספורות ילדים",
  "עיצובי שיער",
  "פיידים",
  "עבודות מיוחדות",
];
export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  position: string;
};
export const gallery: GalleryItem[] = [
  {
    id: 4,
    title: "כוכב עם אופי",
    category: "עיצובי שיער",
    tags: ["תספורות ילדים", "עיצובי שיער"],
    position: "50% 45%",
  },
  {
    id: 1,
    title: "קצת צבע. הרבה אופי.",
    category: "עבודות מיוחדות",
    tags: ["תספורות ילדים", "עבודות מיוחדות"],
    position: "50% 37%",
  },
  {
    id: 8,
    title: "תלתלים, בדיוק שלך",
    category: "פיידים",
    tags: ["פיידים"],
    position: "50% 45%",
  },
  {
    id: 6,
    title: "גיבור־על ליום אחד",
    category: "עיצובי שיער",
    tags: ["תספורות ילדים", "עיצובי שיער"],
    position: "50% 38%",
  },
  {
    id: 2,
    title: "הפרטים שעושים הבדל",
    category: "עיצובי שיער",
    tags: ["תספורות ילדים", "עיצובי שיער", "פיידים"],
    position: "50% 45%",
  },
  {
    id: 9,
    title: "החיוך אומר הכול",
    category: "תספורות ילדים",
    tags: ["תספורות ילדים"],
    position: "50% 46%",
  },
  {
    id: 7,
    title: "לוק שלא עובר בשקט",
    category: "עבודות מיוחדות",
    tags: ["עבודות מיוחדות", "תספורות ילדים"],
    position: "50% 40%",
  },
  {
    id: 11,
    title: "פייד נקי ומדויק",
    category: "פיידים",
    tags: ["פיידים"],
    position: "50% 45%",
  },
  {
    id: 5,
    title: "הכתר שלך",
    category: "עיצובי שיער",
    tags: ["עיצובי שיער", "תספורות ילדים"],
    position: "50% 35%",
  },
  {
    id: 10,
    title: "רעיון שהופך לתספורת",
    category: "עבודות מיוחדות",
    tags: ["עיצובי שיער", "עבודות מיוחדות"],
    position: "50% 45%",
  },
];
export const services = [
  {
    title: "תספורות ילדים",
    description:
      "סבלנות, הקשבה וקצב שמתאים לילד. חוויה שמתחילה בנחת ומסתיימת בחיוך.",
    icon: "smile",
  },
  {
    title: "תספורות נוער",
    description: "מהלוק הנקי ועד הטרנד הבא. מוצאים יחד את הסגנון שמתאים לכם.",
    icon: "scissors",
  },
  {
    title: "פיידים מדויקים",
    description:
      "מעברים חלקים, קווים נקיים וגימור מוקפד. כי הדיוק נמצא בפרטים.",
    icon: "ruler",
  },
  {
    title: "אמנות ועיצוב בשיער",
    description: "כוכבים, קורים ודוגמאות אישיות. נותנים לדמיון מקום על הראש.",
    icon: "sparkles",
  },
  {
    title: "צבע ונגיעות מיוחדות",
    description: "טאץ׳ של צבע, הבהרות ואופי. התאמה אישית לאחר ייעוץ בסטודיו.",
    icon: "palette",
  },
  {
    title: "ייעוץ והתאמה אישית",
    description:
      "לפי מבנה הפנים, סוג השיער והסגנון שלכם. תספורת שמרגישה בדיוק אתם.",
    icon: "message",
  },
];
export const academy = {
  title: "כישרון הוא התחלה.\nמקצוע זו דרך.",
  description:
    "האקדמיה של אביהו מרוז — המקום שבו אהבה לשיער הופכת לכלים, לטכניקה ולביטחון מקצועי.",
  topics: [
    "יסודות הספרות והיכרות עם כלי העבודה",
    "טכניקות פייד, דירוג וגימור מדויק",
    "אמנות שיער ועיצובים יצירתיים",
    "גישה לילדים ותקשורת עם לקוחות",
  ],
};
export const testimonials = [
  {
    quote:
      "הילד הגיע קצת חושש ויצא עם חיוך ענק. הסבלנות והיחס האישי עשו את כל ההבדל.",
    author: "הורה לילד",
    kind: "תספורת ילדים",
    isSample: true,
  },
  {
    quote:
      "ביקשנו משהו מיוחד וקיבלנו תוצאה מדויקת עד הפרט האחרון. הילד לא הפסיק להסתכל במראה.",
    author: "הורה לילד",
    kind: "עיצוב שיער",
    isSample: true,
  },
  {
    quote:
      "ההסברים, העבודה המעשית והיחס האישי עזרו לי להבין את הטכניקה ולבנות ביטחון.",
    author: "תלמיד באקדמיה",
    kind: "לימודי ספרות",
    isSample: true,
  },
];
export const faqs = [
  {
    q: "הילד חושש מתספורת. אפשר להגיע בכל זאת?",
    a: "בהחלט. הגישה בסטודיו מבוססת על סבלנות והיכרות, בקצב של הילד. כדאי לציין מראש רגישויות או חוויות קודמות כדי שנוכל להתכונן יחד.",
  },
  {
    q: "צריך לקבוע תור מראש?",
    a: "מומלץ לתאם מראש כדי שנוכל להקדיש לכם את הזמן המתאים. אפשר לקבוע תור במערכת התורים, להתקשר או לפנות בוואטסאפ דרך אזור יצירת הקשר.",
  },
  {
    q: "אפשר להביא תמונה של תספורת שאהבנו?",
    a: "בשמחה. תמונת השראה היא התחלה מצוינת. יחד נבדוק איך להתאים את הרעיון לסוג השיער ולסגנון האישי.",
  },
  {
    q: "למי מתאימים הלימודים באקדמיה?",
    a: "למי שרוצה להתחיל להכיר את עולם הספרות וגם למי שמבקש לשפר טכניקות. בשיחת היכרות נבדוק את הניסיון והמטרות ונפרט על המסלול המתאים.",
  },
  {
    q: "מה משך הקורס וכמה הוא עולה?",
    a: "פרטי המסלול, מועדי הלימוד והמחיר נמסרים בשיחת היכרות עם האקדמיה. אפשר להיכנס לקישור ההרשמה לאקדמיה או לפנות אלינו בוואטסאפ לקבלת פרטים.",
  },
];
