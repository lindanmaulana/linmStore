import LinkList from "../Menu/LinkList";
const Publikasi = () => {
  return (
    <div className="w-[200px] h-full px-2 py-7 flex flex-col gap-2">
      <LinkList>Berita</LinkList>
      <LinkList>Siaran Pers</LinkList>
      <LinkList>Majalah Internal</LinkList>
    </div>
  );
};

export default Publikasi;
