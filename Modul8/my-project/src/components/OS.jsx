import OSLogo from "../assets/OSLogo.svg";

export default function OS() {
  return (
    <div className=" text-white bg-stone-900 min-h-screen flex flex-col justify-center items-center p-16">
      <div className="items-center md:place-items-start flex flex-col md:flex-row">
        <img
          src={OSLogo}
          alt="SBD logo"
          className="h-32 w-32 md:h-64 md:w-64"
        />
        <div>
          <h1 className="text-center text-2xl font-bold text-white md:text-left mb-4">
            NETLAB OS
          </h1>
          <div className="bg-stone-800 p-4 rounded-lg shadow-lg">
            <p className="text-lg text-white max-w-4xl mb-4">
              Operasi sistem adalah perangkat lunak inti yang mengelola semua
              perangkat keras dan perangkat lunak dalam komputer. Ia berperan
              sebagai jembatan antara pengguna dengan mesin, mengatur proses,
              memori, penyimpanan, dan perangkat input-output agar berjalan
              harmonis. Contoh sistem operasi yang umum digunakan adalah
              Windows, Linux, dan macOS.
            </p>
            <p className="text-lg text-white max-w-4xl">
              Lebih dari sekadar antarmuka, operasi sistem juga menangani
              multitasking, penjadwalan tugas, serta keamanan sistem. Tanpa
              operasi sistem, aplikasi tidak akan bisa berjalan karena tidak ada
              sistem yang mengatur sumber daya komputer. Dengan kata lain,
              operasi sistem adalah "otak koordinasi" dalam sebuah komputer
              modern.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
