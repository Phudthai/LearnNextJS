import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const facebookApiBaseUrl = 'https://graph.facebook.com/v12.0';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // ตั้งค่าการ redirect ไปยัง Facebook เพื่อขอสิทธิ์
    const redirectUri = `${facebookApiBaseUrl}/oauth/authorize?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.FACEBOOK_REDIRECT_URI}&scope=pages_show_list`;

    res.redirect(redirectUri);
  } else if (req.method === 'POST') {
    // หลังจากผู้ใช้ยืนยันการอนุญาตแล้ว รับโทเคนจาก Facebook
    const { code } = req.body;

    // ขอ access token จาก code ที่ได้รับจากการ redirect
    const tokenResponse = await axios.get(`${facebookApiBaseUrl}/oauth/access_token`, {
      params: {
        client_id: process.env.FACEBOOK_CLIENT_ID,
        client_secret: process.env.FACEBOOK_CLIENT_SECRET,
        redirect_uri: process.env.FACEBOOK_REDIRECT_URI,
        code,
      },
    });

    const { access_token } = tokenResponse.data;

    // ดึงข้อมูลเพจที่ผู้ใช้เป็น admin หรือมีสิทธิ์
    const pagesResponse = await axios.get(`${facebookApiBaseUrl}/me/accounts`, {
      params: {
        access_token,
      },
    });

    const pages = pagesResponse.data.data; // รายการเพจทั้งหมดที่ผู้ใช้เป็น admin

    // ส่งข้อมูลเพจกลับไปยังหน้าแอปหรือทำการบันทึกลงฐานข้อมูล
    res.status(200).json(pages);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
