import React, { useState } from 'react';

const FormPesan = ({ onSubmit }) => {
  const [pesan, setPesan] = useState('');
  const [nama, setNama] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nama, pesan });
    setPesan('');
    setNama('');
  };

  const handleReset = () => {
    setPesan('');
    setNama('');  
  };

  return (
    <form onSubmit={handleSubmit} className="pesan-form">
      <input
        type="text"
        name="nama"
        id="nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama (opsional)"
      />

      <section>
        <textarea
          name="isipesan"
          id="isipesan"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tuliskan pesan kamu disini..."
        />
      </section>

      <section className="aksi-pesan">
        <div className="tombol">
          <button type="reset" className="btn btn-batal" onClick={handleReset}>
            Batal
          </button>
          <button type="submit" className="btn btn-kirim">
            Kirim
          </button>
        </div>
      </section>
    </form>
  );
};

export default FormPesan;
