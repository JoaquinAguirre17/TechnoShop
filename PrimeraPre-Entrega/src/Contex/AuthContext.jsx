import { createContext, useContext, useState } from 'react'; // Importa las funciones necesarias de React

// Crea un contexto para la autenticación
const AuthContext = createContext(); 

// Componente proveedor de autenticación
export const AuthProvider = ({ children }) => {
  // Estado para determinar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Estado para almacenar el token JWT, inicia con el token almacenado en localStorage o una cadena vacía
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Función para manejar el inicio de sesión
  const login = (newToken) => {
    // Almacena el nuevo token en localStorage
    localStorage.setItem('token', newToken);
    
    // Actualiza el estado del token
    setToken(newToken);
    
    // Cambia el estado de autenticación a verdadero
    setIsAuthenticated(true);
  };

  // Función para manejar el cierre de sesión
  const logout = () => {
    // Elimina el token de localStorage
    localStorage.removeItem('token');
    
    // Restablece el estado del token a una cadena vacía
    setToken('');
    
    // Cambia el estado de autenticación a falso
    setIsAuthenticated(false);
  };

  // Define el valor que se proporcionará a los componentes que consumen este contexto
  const value = {
    isAuthenticated, // Estado que indica si el usuario está autenticado
    token, // El token de autenticación
    login, // Función para iniciar sesión
    logout, // Función para cerrar sesión
  };

  // Proporciona el contexto a los componentes hijos
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext); 

