import React, { useState } from 'react';
import { Library } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { BookCard } from './components/BookCard';
import { Book } from './types';

const mockBooks: Book[] = [
  { titulo: "El Código da Vinci", autor: "Dan Brown", anioPublicacion: 2003, disponibilidad: true },
  { titulo: "El señor de los anillos", autor: "J. R. R. Tolkien", anioPublicacion: 1954, disponibilidad: true },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anioPublicacion: 1615, disponibilidad: true },
  { titulo: "Harry Potter", autor: "Joanne Rowling", anioPublicacion: 1997, disponibilidad: false },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anioPublicacion: 1967, disponibilidad: true },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = mockBooks.filter(book => 
    book.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.autor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Library className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Sistema de Gestión Bibliotecaria
              </h1>
            </div>
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.titulo} book={book} />
          ))}
        </div>
        
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron libros que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;