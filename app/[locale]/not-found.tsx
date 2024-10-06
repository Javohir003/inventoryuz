import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Sahifa topilmadi</h1>
      <p>Bu sahifa mavjud emas yoki boshqa joyga ko'chirilgan.</p>
      <Link href="/">Bosh sahifaga qaytish</Link>
    </div>
  );
}