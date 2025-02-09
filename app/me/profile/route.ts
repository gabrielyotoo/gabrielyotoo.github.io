import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    picture:
      'https://instagram.fcpq4-1.fna.fbcdn.net/v/t51.2885-19/465072891_950974910180301_377412687983372936_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fcpq4-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2AEmfv_0x-GD5evlm3LJZbI-5_ItqC5bc00ERpuhKAXtOJY73UjpL4jbxwTUmxOJz_yYgGecSeDrYaNDPPH9LExR&_nc_ohc=JXxzsPOSrxwQ7kNvgFxgk2U&_nc_gid=0e73bdbda28043cf94cf4654a9ca90b7&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYAvvzCsOKJh2hRSbUyK_n_w8qqPogISFUdn8ZcOqCp0xA&oe=67AEE265&_nc_sid=7a9f4b',
    name: 'Gabriel Freitas Yamamoto',
    introduction: '',
  });
}
