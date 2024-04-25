import React from 'react';
import PDF from './PDF';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="w-3/4 flex flex-col items-center">
        <PDFDownloadLink document={<PDF />} fileName='PDF de prueba'>
          {({ loading }) => (
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              {loading ? 'Cargando PDF...' : 'Descargar PDF'}
            </button>
          )}
        </PDFDownloadLink>
        <div className="mt-8 w-full md:w-96 md:h-96 rounded-lg shadow-md">
          <div className="w-full h-full">
            <PDFViewer style={{ width: '100%', height: '100%' }}>
              <PDF />
            </PDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
