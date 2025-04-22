import DMJLogo from "../assets/DMJLogo.svg";

export default function DMJ() {
  return (
    <div className=" text-white bg-stone-900 min-h-screen flex flex-col justify-center items-center p-16">
      <div className="items-center md:place-items-start flex flex-col md:flex-row">
        <img
          src={DMJLogo}
          alt="SBD logo"
          className="h-32 w-32 md:h-64 md:w-64"
        />
        <div>
          <h1 className="text-center text-2xl font-bold text-white md:text-left mb-4">
            NETLAB DMJ
          </h1>
          <div className="bg-stone-800 p-4 rounded-lg shadow-lg">
            <p className="text-lg text-white max-w-4xl mb-4">
              Desain manajemen jaringan adalah proses merancang cara mengelola
              dan memantau jaringan komputer agar tetap berjalan optimal. Ini
              mencakup perencanaan sistem pemantauan kinerja, pengaturan
              perangkat jaringan, serta strategi untuk menangani gangguan atau
              serangan siber. Dengan desain manajemen yang baik, administrator
              jaringan bisa dengan mudah mendeteksi masalah dan memperbaikinya
              sebelum berdampak luas.
            </p>
            <p className="text-lg text-white max-w-4xl">
              Selain itu, manajemen jaringan juga mencakup pengaturan hak akses
              pengguna, alokasi bandwidth, serta pencatatan log aktivitas. Dalam
              skala besar, desain manajemen ini menggunakan software Network
              Management System (NMS) yang bisa mengatur ratusan perangkat dalam
              satu antarmuka. Tanpa manajemen yang baik, jaringan berisiko
              mengalami downtime, kebocoran data, atau inefisiensi operasional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
