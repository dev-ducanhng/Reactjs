import React from 'react';
export default function ContacLayout() {
  return (
    <>
      <div className="mt-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178406930702025!3d51.52873519756608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTHXDom4gxJDDtG4sIFbGsMahbmcgUXXhu5FjIEFuaA!5e0!3m2!1svi!2s!4v1603036324939!5m2!1svi!2s" width="100%" height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-9">
          <div className="flex my-10 mx-2">
            <div className="w-6 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl">Office Address:</span><br />
              <span>59 Street, loseagne, Newyork Road City</span>
            </div>
          </div>
          <div className="flex my-10 mx-2">
            <div className="w-6 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl">Phone:</span><br />
              <span>+123 88 9999 00, +123 88 9999 00, +123 88 9999 00</span>
            </div>
          </div>
          <div className="flex my-10 mx-2">
            <div className="w-6 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl">Mail Us:</span><br />
              <span className="prose">info@gmail.com, info@gmail.com, info@gmail.com</span>
            </div>
          </div>
          <div className="flex my-10 mx-2">
            <div className="w-6 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl prose">Fax No:</span><br />
              <span>+59 987 065 009,+59 987 065 009,+59 987 065 009</span>
            </div>
          </div>
          <div className="mx-2">
            <span className="font-bold prose">LEAVE US A MESSAGE</span>
            <hr />
          </div>
          <div>
            <form action="#">
              <div>
                <div>
                  <input type="text" className="border border-gray-500 w-2/5 h-12 rounded-md my-2 mx-2 " placeholder="Name*" required />
                  <input type="text" className="border border-gray-500 w-2/5 h-12 rounded-md my-2 mx-2 required" placeholder="Email*" /><br />
                  <input type="text" className="border border-gray-500 w-2/5 h-12 rounded-md my-2 mx-2 required" placeholder="Subject*" />
                  <input type="text" className="border border-gray-500 w-2/5 h-12 rounded-md my-2 mx-2 required" placeholder="Your website*" />
                </div>
              </div>
              <div>
                <textarea name id className=" ml-2 border border-gray-500  rounded-md w-10/12 md:w-auto" cols={115} rows={5} placeholder="Messeage" defaultValue={""} />
              </div>
              <input type="submit" className=" h-14 w-32 bg-red-600 px-6 py-2 font-semibold rounded-xl  hover:bg-red-500 text-white" defaultValue="SEND MESSAGE " />
            </form>
          </div>
        </div>
       
      </div>

    </>

  )

}