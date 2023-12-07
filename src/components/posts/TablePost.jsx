import React from 'react';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ApiPostComponent from './ActionComponent';
import usePosts from '../../hooks/usePostsSi';

export default function TablaPublicPrime() {
    const lista = usePosts();
    const posts = lista.posts;

    if (lista.length === 0) {
        return <h1>Cargando posts</h1>;
    } else {
        return (
            <div className="table-container">
            <div className="bg-blue-500 text-white p-4 rounded-lg overflow-hidden">TABLA DE PUBLICACIONES</div>
        <div className="card">
            <DataTable value={posts} tableStyle={{ minWidth: '50rem' }}>
                <Column field="Id" header="Post ID" />
                <Column field="fecha" header="Fecha" />
                <Column field="descripcion" header="Descripcion" />
                <Column field="imagen" header="Imagen" />
                <Column field="hora" header="Hora" />
                <Column field="ubicacion" header="Ubicacion" />
                <Column field="userId" header="UserID" />
                <Column
                    field="acciones"
                    header="ACCIONES"
                    body={(rowData) => (
                        <ApiPostComponent userId={rowData.userId} />
                    )}
                />
            </DataTable>
        </div>
        </div>
    );
}
}