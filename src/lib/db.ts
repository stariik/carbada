import Database from "better-sqlite3";
import bcrypt from "bcryptjs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "carbada.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;

  db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  initializeDatabase(db);
  return db;
}

function initializeDatabase(database: Database.Database): void {
  database.exec(`
    CREATE TABLE IF NOT EXISTS service_cards (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      button_text TEXT NOT NULL DEFAULT 'დაგვიკავშირდით',
      image_path TEXT DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    );
  `);

  const cardCount = (
    database.prepare("SELECT COUNT(*) as count FROM service_cards").get() as {
      count: number;
    }
  ).count;

  if (cardCount === 0) {
    const insertCard = database.prepare(
      "INSERT INTO service_cards (id, title, description, button_text, image_path) VALUES (?, ?, ?, ?, ?)"
    );

    insertCard.run(
      1,
      "ავტომობილების გაყიდვა",
      "ჩვენ გთავაზობთ პრემიუმ კლასის ავტომობილების ფართო არჩევანს. ახალი და მეორადი მანქანები საუკეთესო ფასებში — სრული გარანტიით, ტექნიკური შემოწმებით და გამჭვირვალე გარიგებების პირობებით. თქვენი სიზმრის ავტომობილი Carbada-ს კატალოგში გელოდება.",
      "დაგვიკავშირდით",
      ""
    );

    insertCard.run(
      2,
      "ავტომობილების გაქირავება",
      "მოიქირავეთ კომფორტული ავტომობილი თქვენი ნებისმიერი საჭიროებისთვის. ბიზნეს მოგზაურობა, ოჯახური გამოწვევა თუ გასვლა ქალაქგარეთ — ჩვენი პარკი მოიცავს ეკონომ კლასიდან დაწყებული პრემიუმ SUV-ებამდე. მოქნილი პირობები, 24/7 მხარდაჭერა.",
      "დაგვიკავშირდით",
      ""
    );

    insertCard.run(
      3,
      "სატაქსო მომსახურება",
      "პროფესიონალური სატაქსო სერვისი თბილისსა და მის გარეთ. გამოცდილი მძღოლები, კომფორტული ავტომობილები და პუნქტუალური მომსახურება — ეს სამი სიტყვა საუკეთესოდ ახასიათებს Carbada Taxi-ს. დაჯავშნეთ წინასწარ ან დარეკეთ ახლავე.",
      "დაგვიკავშირდით",
      ""
    );
  }

  const userCount = (
    database.prepare("SELECT COUNT(*) as count FROM users").get() as {
      count: number;
    }
  ).count;

  if (userCount === 0) {
    const hashedPassword = bcrypt.hashSync("admin123", 12);
    database
      .prepare("INSERT INTO users (username, password) VALUES (?, ?)")
      .run("admin", hashedPassword);
  }
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  button_text: string;
  image_path: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export function getAllCards(): ServiceCard[] {
  const database = getDb();
  return database
    .prepare("SELECT * FROM service_cards ORDER BY id ASC")
    .all() as ServiceCard[];
}

export function getCardById(id: number): ServiceCard | undefined {
  const database = getDb();
  return database
    .prepare("SELECT * FROM service_cards WHERE id = ?")
    .get(id) as ServiceCard | undefined;
}

export function updateCard(
  id: number,
  data: Partial<Omit<ServiceCard, "id">>
): void {
  const database = getDb();
  const fields = Object.keys(data)
    .map((key) => `${key} = ?`)
    .join(", ");
  const values = Object.values(data);
  database
    .prepare(`UPDATE service_cards SET ${fields} WHERE id = ?`)
    .run(...values, id);
}

export function getUserByUsername(username: string): User | undefined {
  const database = getDb();
  return database
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username) as User | undefined;
}
