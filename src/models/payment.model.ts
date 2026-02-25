export interface Payment {
  id: string;
  studentId: string;
  amount: number;
  date: string;
  type: "monthly" | "bonus";
}
