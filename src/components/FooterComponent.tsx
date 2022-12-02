export default function FooterComponent() {
  return (
    <>
      <div className='flex justify-center bg-gray-700 py-5 text-left text-white '>
        <div className=''>
          <div>RV 22-25</div>
          <div> RP 55 - 58</div> © {new Date().getFullYear()} Naziv
        </div>
      </div>{' '}
    </>
  );
}
