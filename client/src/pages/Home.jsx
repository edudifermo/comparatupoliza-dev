// client/src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import VehicleForm from '../components/VehicleForm';
import OwnerForm from '../components/OwnerForm';
import FileUpload from '../components/FileUpload';

export default function Home() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <Header />
      <VehicleForm />
      <OwnerForm />
      <FileUpload />
    </main>
  );
}
