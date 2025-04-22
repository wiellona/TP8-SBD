import SBDLogo from "../assets/SBDLogo.svg";

export default function SBD() {
  return (
    <div className=" text-white bg-stone-900 min-h-screen flex flex-col justify-center items-center p-16">
      <div className="items-center md:place-items-start flex flex-col md:flex-row">
        <img
          src={SBDLogo}
          alt="SBD logo"
          className="h-32 w-32 md:h-64 md:w-64"
        />
        <div>
          <h1 className="text-center text-2xl font-bold text-white md:text-left mb-4">
            NETLAB SBD
          </h1>
          <div className="bg-stone-800 p-4 rounded-lg shadow-lg">
            <p className="text-lg text-white max-w-4xl mb-4">
              Sistem basis data adalah kumpulan perangkat lunak yang dirancang
              untuk menyimpan, mengelola, dan mengambil data secara efisien.
              Dalam dunia modern, hampir semua aplikasi—mulai dari media sosial
              hingga e-commerce—mengandalkan sistem basis data untuk menyimpan
              informasi seperti akun pengguna, transaksi, dan histori aktivitas.
            </p>
            <p className="text-lg text-white max-w-4xl">
              Sistem ini menggunakan bahasa seperti SQL untuk mengelola data
              dalam bentuk tabel, relasi, dan query. Salah satu fitur pentingnya
              adalah menjaga integritas dan konsistensi data meskipun ada banyak
              pengguna yang mengakses secara bersamaan. Dengan sistem basis data
              yang baik, data bisa disimpan dengan rapi, diakses dengan cepat,
              dan tetap aman dari kerusakan atau manipulasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
