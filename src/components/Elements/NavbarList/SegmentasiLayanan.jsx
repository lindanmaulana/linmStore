import LinkList from "../Menu/LinkList";
const SegmentasiLayanan = () => {
  return (
    <div className="w-[500px] h-full px-4 py-7 flex gap-10">
      <div className="basis-1/2 flex flex-col gap-4">
        <LinkList>Angkutan Kota</LinkList>
        <LinkList>Angkutan Antar Kota</LinkList>
        <LinkList>Angkutan Lintas Batas</LinkList>
        <LinkList>Angkutan Bandara</LinkList>
      </div>
      <div className="basis-1/2 flex flex-col gap-4">
        <LinkList>Angkutan Pariwisata</LinkList>
        <LinkList>Angkutan Logistik</LinkList>
        <LinkList>Angkutan Perintis</LinkList>
      </div>
    </div>
  );
};

export default SegmentasiLayanan;
