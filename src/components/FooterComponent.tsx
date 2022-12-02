export default function FooterComponent() {
  return (
    <>
      <div className='flex justify-center bg-gray-700 py-5 text-left text-white '>
        <div className=''>
          <div>RADNO VRIJEME 09-00</div>
          <div> TELEFON 01 4813 394</div> © {new Date().getFullYear()} Nokturno
        </div>
      </div>{' '}
    </>
  );
}
