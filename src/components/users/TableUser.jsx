import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ApiComponent from '../apiComponentSi';
import useUsers from '../../hooks/useUsersSi';

function UserTable() {
  const lista = useUsers();
  const users = lista.users;

  if (lista.length === 0) {
    return <h1>Cargando usuarios</h1>;
  } else {
    return (
      <div className="table-container">
      <div className="bg-blue-500 text-white p-4 rounded-lg overflow-hidden">TABLA DE USUARIOS</div>

      <div className="card">
        <DataTable value={users} tableStyle={{ minWidth: '50rem' }}>
          <Column field="username" header="Username" />
          <Column field="password" header="Password" />
          <Column field="email" header="Email" />
          <Column field="id" header="ID" />
          <Column
            field="acciones"
            header="ACCIONES"
            body={(rowData) => (
              <ApiComponent userId={rowData.id} />
            )}
          />
        </DataTable>
      </div>
      </div>
    );
  }
}

export default UserTable;
