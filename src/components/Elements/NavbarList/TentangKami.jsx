import LinkList from "../Menu/LinkList";

const TentangKami = () => {
  return (
    <div className="w-full h-full px-4 py-7 flex flex-col gap-2 divide-y-[1px]">
      <LinkList>Sekilas LinmTrans</LinkList>
      <LinkList>Sejarah Perusahaan</LinkList>
      <LinkList>Budaya Perusahaan</LinkList>
      <LinkList>Dewan Pengawas</LinkList>
      <LinkList>Direksi</LinkList>
      <LinkList>Visi dan Misi</LinkList>
      <LinkList>Penghargaan</LinkList>
    </div>
  );
};

export default TentangKami;
