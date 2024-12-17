import React from 'react';
import { Book } from '../types';
import { BookOpen, CheckCircle, XCircle } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{book.titulo}</h3>
          <p className="mt-1 text-gray-600">{book.autor}</p>
          <p className="mt-1 text-sm text-gray-500">Año: {book.anioPublicacion}</p>
        </div>
        <div className="ml-4">
          {book.disponibilidad ? (
            <CheckCircle className="h-6 w-6 text-green-500" />
          ) : (
            <XCircle className="h-6 w-6 text-red-500" />
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <BookOpen className="h-4 w-4 mr-1" />
        <span>{book.disponibilidad ? 'Disponible' : 'No disponible'}</span>
      </div>
    </div>
  );
}