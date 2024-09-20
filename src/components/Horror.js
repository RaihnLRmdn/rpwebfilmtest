import { Card, Container, Row, Col, Image } from "react-bootstrap";
import garden from "../assets/images/horror/garden.jpg";
import kangMak from "../assets/images/horror/Kang Mak.jpg";
import lembayung from "../assets/images/horror/lembayung.jpg";
import malam from "../assets/images/horror/Malam Keramat.jpg";
import perjanjian from "../assets/images/horror/perjanjian.jpg";
import thagut from "../assets/images/horror/thagut.jpg";

const Horror = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Horror Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="horor">
            <Card className="movieImage">
              <Image src={garden} alt="Garden" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    NEULBOM: THE CURSED
                  </Card.Title>
                  <Card.Text className="text-left">
                    So Hee pindah ke Spring Garden, sebuah rumah peninggalan
                    suaminya di area pedesaan, walaupun saudarinya Hye-ran sudah
                    mencoba melarangnya. Mereka akhirnya mengalami pengalaman
                    menyeramkan yang sulit dijelaskan.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 5 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={kangMak} alt="Kang-mak" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    KANG MAK (FROM PEE MAK)
                  </Card.Title>
                  <Card.Text className="text-left">
                    MAKMUR (Vino G Bastian) adalah tentara Indonesia yang harus
                    meninggalkan istrinya, SARI (Marsha Timothy), yang sedang
                    hamil tua, untuk pergi perang di suatu tempat, membela
                    keutuhan NKRI. Makmur berjuang bersama dengan tentara
                    lainnya, SUPRA (Indro Warkop), FAJRUL (Indra Jegel), JAKA
                    (Tora Sudiro), dan SOLAH (Rigen Rakelna). Keinginannya yang
                    kuat untuk bertemu kembali dengan Sari, membuat Makmur dan
                    teman-temannya selamat dari medan perang. Mereka mengikat
                    janji sebagai sahabat sehidup semati. Ketika pulang, Makmur
                    bersatu kembali dengan Sari yang sudah melahirkan anak
                    mereka, Cipluk. Teman-teman Makmur juga ikut bahagia dan
                    sedikit iri, melihat kemesraan Makmur pada istrinya yang
                    cantik luar biasa. Namun situasi menjadi tidak nyaman,
                    ketika terdengar desas desus bahwa Sari itu sudah meninggal
                    sebenarnya. Sari yang hidup bersama mereka, adalah sosok
                    arwah gentayangan.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={lembayung} alt="Lembayung" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LEMBAYUNG</Card.Title>
                  <Card.Text className="text-left">
                    Pica (Taskya Namya) dan Arum (Yasamin Jasem), mahasiswi
                    keperawatan, menjalani masa PKL di Klinik Lembayung yang
                    baru dibuka kembali setelah lama ditutup. Suatu malam,
                    pasien misterius yang menyeramkan, berambut panjang muncul
                    di poli gigi, membuat Pica dan Arum sangat ketakutan. Sosok
                    itu terus menghantui mereka hingga terbawa ke mimpi Arum.
                    Peristiwa janggal mulai terjadi, diikuti dengan runutan
                    kejadian tragis di Klinik Lembayung. Saat Arum kerasukan,
                    Pica berusaha mengungkap misteri Klinik Lembayung sebelum
                    sahabatnya menjadi korban berikutnya.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={malam} alt="Malam-keramat" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MALAM KERAMAT</Card.Title>
                  <Card.Text className="text-left">
                    Dini (25 tahun) seorang Sales Property sedang hamil
                    memasarkan sebuah rumah mewah, rumah mewah yang akan dijual
                    Dini terletak di wilayah sepi dan antar rumah berjauhan.
                    Sore menjelang magrib Dini sampai di rumah itu, sebelum
                    kedatangan Dini rumah itu di datangi juga oleh 2 orang
                    maling pasangan suami istri, Ranu ( 25 tahun ) dan Jani ( 23
                    tahun) dapat informasi ada emas yang di simpan di dalam
                    rumah mewah itu. Calon pembeli rumah merupakan adik kakak
                    bernama Juan ( 27 tahun ) dan Lisa ( 25 Tahun ) datang
                    hampir tengah malam membawa seorang nenek misterius, nenek
                    yang menyeramkan dengan perut buncit seperti hamil. Setelah
                    kepergian Juan dan Lisa dari rumah itu, Dini malah menemukan
                    nenek itu di dalam rumah. Nenek itu ternyata bukan manusia,
                    suasana mulai mencekam lalu teror mengerikan meneror Dini,
                    Ranu dan Jani yang terperangkap dalam rumah oleh kekuatan
                    ilmu hitam yang di miliki keluarga Juan dan Lisa secara
                    turun temurun dengan ritual pada MALAM KERAMAT, malam dengan
                    bulan merah nan mistis dan mencekam dimana makhluk gaib
                    mencari mangsa
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={perjanjian} alt="perjanjian" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    PERJANJIAN SETAN
                  </Card.Title>
                  <Card.Text className="text-left">
                    KARTINI (Callista Arum) nekad pergi ke Jakarta meski
                    orangtuanya tak setuju, karena merasa Jakarta bukan kota
                    yang aman. Tapi Kartini merasa harus mengejar cita-citanya.
                    Ia tak bisa merelakan beasiswa yang sudah susah payah ia
                    dapatkan. Kartini pun pergi ke Jakarta dengan bantuan IVAN
                    (Kenny Austin), lelaki yang saat ini menjadi kekasihnya.
                    Keduanya berkenalan melalui sosmed dan sudah beberapa bulan
                    menjalin komunikasi. Kartini yang punya budget pas-pasan
                    harus mencari tempat tinggal dengan budget minim. Ivan
                    menawari untuk tinggal bersama, tapi Kartini enggan, hingga
                    saat keduanya selesai makan di sebuah cafe, Kartini
                    menemukan selebaran yang berisi info kos-kosan khusus wanita
                    yang bisa bayar seikhlasnya. Kartini tertarik.Kartini
                    mendapati beberapa syarat aneh saat mendatangi kos-kosan
                    itu, tapi karena ia butuh tempat tinggal segera, ia pun
                    menyetujui semuanya. Kartini pun pindah dan sejak saat
                    itulah ia mendapati banyak hal-hal misterius. Kartini tak
                    menyadari bahwa nyawanya sedang terancam karena ia merupakan
                    tumbal yang dipersembahkan untuk penghuni kos-kosan.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={thagut} alt="Dune Movies" className="thagut" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THAGHUT</Card.Title>
                  <Card.Text className="text-left">
                    Ainun (Yasmin Napper), seorang remaja yang tinggal di
                    pesantren, mengagumi Abah Mulya (Whani Darmawan) karena
                    kesaktiannya yang hanya dilihat melalui televisi. Setelah
                    kematian Abah Mulya, Ainun mengetahui bahwa Abah Mulya
                    adalah ayah kandungnya, yang membuatnya penasaran dan datang
                    ke Padepokan bersama teman-temannya, Bagas (Arbani Yasiz)
                    dan Rini (Ria Ricis). Di sana, Ainun terjebak dalam ajaran
                    sesat yang dipimpin oleh Lingga (Dennis Adhiswara), meskipun
                    telah diperingatkan oleh Ajeng (Hana Saraswati), istri
                    ketiga Abah, dan Rahmat (Keanu Azka), adik Ainun. Bagas dan
                    Rini berusaha menyelamatkan Ainun, Rahmat, dan Ajeng dari
                    cengkeraman ajaran sesat tersebut.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Horror;
