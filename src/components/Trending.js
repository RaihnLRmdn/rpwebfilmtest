import { Card, Container, Row, Col, Image } from "react-bootstrap";
import hellBoyImage from "../assets/images/trending/HellBoy.jpg";
import kakaBosImage from "../assets/images/trending/Kaka Bos.jpg";
import robotImage from "../assets/images/trending/robot.jpg";
import seniImage from "../assets/images/trending/seni.jpg";
import stillImage from "../assets/images/trending/still.jpg";
import theImage from "../assets/images/trending/the.jpg";

const Trending = () => {
  const movies = [
    {
      title: "HELLBOY: THE CROOKED MAN",
      image: hellBoyImage,
      description:
        "Berlatar tahun 1950-an, Hellboy (Jack Kesy) dan seorang agen muda bekerja sama untuk melindungi penduduk Appalachia dari penjahat yang bekerja sama dengan iblis.",
      lastUpdated: "3 menit yang lalu",
    },
    {
      title: "KAKA BOSS",
      image: kakaBosImage,
      description:
        "KAKA BOSS (Godfred Orindeod), seorang debt collector sukses, ingin banting setir menjadi seorang penyanyi demi menyenangkan hati anak gadis semata wayangnya yang duduk di bangku SMA.",
      lastUpdated: "3 menit yang lalu",
    },
    {
      title: "JUNG KOOK: I AM STILL",
      image: stillImage,
      description:
        '*JUNG KOOK: I AM STILL* mengisahkan perjalanan Jung Kook dari BTS menuju ketenaran global setelah debut solonya dengan lagu "Seven (feat. Latto)" pada Juli 2023.',
      lastUpdated: "3 menit yang lalu",
    },
    {
      title: "SENI MEMAHAMI KEKASIH",
      image: seniImage,
      description:
        "Ini merupakan kisah cinta dua manusia biasa, mirip dengan kisah cinta kita semua.",
      lastUpdated: "3 menit yang lalu",
    },
    {
      title: "TRANSFORMERS ONE (3D)",
      image: robotImage,
      description:
        "Kisah asal usul yang belum pernah diketahui dari Optimus Prime dan Megatron.",
      lastUpdated: "3 menit yang lalu",
    },
    {
      title: "THE ROUNDUP: PUNISHMENT",
      image: theImage,
      description:
        "Etektif MA Seok-do menangani kasus pengedar narkoba yang melibatkan penggunaan aplikasi pengiriman.",
      lastUpdated: "3 menit yang lalu",
    },
  ];

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          {movies.map((movie, index) => (
            <Col md={4} key={index} className="movieWrapper" id="trending">
              <Card className="movieImage">
                <Image src={movie.image} alt={movie.title} className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">
                      {movie.title}
                    </Card.Title>
                    <Card.Text className="text-left">
                      {movie.description}
                    </Card.Text>
                    <Card.Text className="text-left">
                      {movie.lastUpdated}
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;

// CODINGAN AWAL SEBELUM DI RAPIIN
// import { Card, Container, Row, Col, Image } from "react-bootstrap";
// import HellBoy from "../assets/images/trending/HellBoy.jpg";
// import kakaBos from "../assets/images/trending/Kaka Bos.jpg";
// import robot from "../assets/images/trending/robot.jpg";
// import seni from "../assets/images/trending/seni.jpg";
// import still from "../assets/images/trending/still.jpg";
// import the from "../assets/images/trending/the.jpg";

// const Trending = () => {
//   return (
//     <div>
//       <Container>
//         <br />
//         <h1 className="text-white">TRENDING MOVIES</h1>
//         <br />
//         <Row>
//           <Col md={4} className="movieWrapper" id="trending">
//             <Card className="movieImage">
//               <Image src={HellBoy} alt="test" className="images" />
//               <div className="bg-dark">
//                 <div className="p-2 m-1 text-white">
//                   <Card.Title className="text-center">
//                     HELLBOY: THE CROOKED MAN
//                   </Card.Title>
//                   <Card.Text className="text-left">
//                     Berlatar tahun 1950-an, Hellboy (Jack Kesy) dan seorang agen
//                     muda bekerja sama untuk melindungi penduduk Appalachia dari
//                     penjahat yang bekerja sama dengan iblis.
//                   </Card.Text>
//                   <Card.Text className="text-left">
//                     Last updated 3 mins ago
//                   </Card.Text>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//           <Col md={4} className="movieWrapper">
//             <Card className="movieImage">
//               <Image src={kakaBos} alt="test" className="images" />
//               <div className="bg-dark">
//                 <div className="p-2 m-1 text-white">
//                   <Card.Title className="text-center">KAKA BOSS</Card.Title>
//                   <Card.Text className="text-left">
//                     KAKA BOSS (Godfred Orindeod), seorang debt collector sukses,
//                     ingin banting setir menjadi seorang penyanyi demi
//                     menyenangkan hati anak gadis semata wayangnya yang duduk di
//                     bangku SMA. Sayangnya, suaranya fals, dan tidak ada satu pun
//                     yang berani bilang, baik anak buah Kaka Boss, maupun
//                     orang-orang di studio rekaman. Mereka pun lanjut membuatkan
//                     Kaka Boss sebuah single. Sebuah bom waktu yang akan meledak
//                     dan siap memicu kekacauan. Apa yang akan terjadi
//                     selanjutnya?.
//                   </Card.Text>
//                   <Card.Text className="text-left">
//                     Last updated 3 mins ago
//                   </Card.Text>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//           <Col md={4} className="movieWrapper">
//             <Card className="movieImage">
//               <Image src={still} alt="test" className="images" />
//               <div className="bg-dark">
//                 <div className="p-2 m-1 text-white">
//                   <Card.Title className="text-center">
//                     JUNG KOOK: I AM STILL
//                   </Card.Title>
//                   <Card.Text className="text-left">
//                     *JUNG KOOK: I AM STILL* mengisahkan perjalanan Jung Kook
//                     dari BTS menuju ketenaran global setelah debut solonya
//                     dengan lagu "Seven (feat. Latto)" pada Juli 2023. Film ini
//                     merekam momen penting selama delapan bulan, termasuk
//                     wawancara eksklusif, cuplikan di balik layar, dan konser.
//                     Jung Kook mencatat sejarah sebagai artis solo Asia pertama
//                     yang memuncaki tangga lagu Billboard HOT 100 dan sukses
//                     dengan albumnya *GOLDEN*. Film ini menyoroti dedikasinya
//                     serta hubungan emosionalnya dengan para penggemar, ARMY.
//                   </Card.Text>
//                   <Card.Text className="text-left">
//                     Last updated 3 mins ago
//                   </Card.Text>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//           <Col md={4} className="movieWrapper">
//             <Card className="movieImage">
//               <Image src={seni} alt="test" className="images" />
//               <div className="bg-dark">
//                 <div className="p-2 m-1 text-white">
//                   <Card.Title className="text-center">
//                     SENI MEMAHAMI KEKASIH
//                   </Card.Title>
//                   <Card.Text className="text-left">
//                     Ini merupakan kisah cinta dua manusia biasa, mirip dengan
//                     kisah cinta kita semua. Kalis (Febby Rastanti), perempuan
//                     biasa-biasa saja jatuh cinta kepada Agus (Elang El Gibran),
//                     cowok medium ugly yang biasa-biasa saja juga, namun sangat
//                     percaya diri. Saat keduanya hampir jadian, ketakutan akan
//                     masa depan dan ekonomi yang pas-pasan menghantui
//                   </Card.Text>
//                   <Card.Text className="text-left">
//                     Last updated 3 mins ago
//                   </Card.Text>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//           <Col md={4} className="movieWrapper">
//             <Card className="movieImage">
//               <Image src={robot} alt="Dune Movies" className="images" />
//               <div className="bg-dark">
//                 <div className="p-2 m-1 text-white">
//                   <Card.Title className="text-center">
//                     TRANSFORMERS ONE (3D)
//                   </Card.Title>
//                   <Card.Text className="text-left">
//                     Kisah asal usul yang belum pernah diketahui dari Optimus
//                     Prime dan Megatron. Keduanya dikenal sebagai musuh abadi,
//                     tapi awalnya mereka adalah teman yang terikat seperti
//                     saudara. Namun berjalannya waktu, mereka saling berkonflik
//                     hingga saat ini.
//                   </Card.Text>
//                   <Card.Text className="text-left">
//                     Last updated 3 mins ago
//                   </Card.Text>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//           <Col md={4} className="movieWrapper">
//             <Card className="movieImage">
//               <Image src={the} alt="test" className="images" />
//               <div className="bg-dark">
//                 <div className="p-2 m-1 text-white">
//                   <Card.Title className="text-center">
//                     THE ROUNDUP: PUNISHMENT
//                   </Card.Title>
//                   <Card.Text className="text-left">
//                     etektif MA Seok-do menangani kasus pengedar narkoba yang
//                     melibatkan penggunaan aplikasi pengiriman. Terungkap bahwa
//                     pengembang aplikasi yang dicari meninggal di Filipina dan
//                     kematiannya terkait dengan operasi perjudian ilegal online
//                     yang besar.
//                   </Card.Text>
//                   <Card.Text className="text-left">
//                     Last updated 3 mins ago
//                   </Card.Text>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Trending;
