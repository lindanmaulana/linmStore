import LinkList from "../Menu/LinkList";
const Publikasi = () => {
  return (
    <div className="w-full h-full px-4 py-7 flex flex-col gap-2">
      <LinkList>Berita</LinkList>
      <LinkList>Siaran Pers</LinkList>
      <LinkList>Majalah Internal</LinkList>
    </div>
  );
};

export default Publikasi;
