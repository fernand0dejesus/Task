import React from 'react';
import './NoProtect.css';

const NoProtect = () => {
  return (
    <div className="no-protect-container">
      <div className="content-wrapper">
        <div className="icon-container">
          <div className="unlock-icon">🔓</div>
        </div>
        
        <h1 className="main-title">Página No Protegida</h1>
        
        <div className="status-card">
          <p className="status-message">
            Esta página <strong>NO está protegida</strong> por AuthContext
          </p>
          <p className="description">
            Puedes acceder a esta página sin necesidad de autenticación
          </p>
        </div>

        <div className="info-section">
          <h2>Información de Acceso</h2>
          <ul className="access-list">
            <li>✅ Acceso público disponible</li>
            <li>✅ No requiere inicio de sesión</li>
            <li>✅ Sin restricciones de usuario</li>
            <li>✅ Contenido libre</li>
          </ul>
        </div>

        <div className="action-buttons">
          <button className="btn-primary">Explorar Contenido</button>
          <button className="btn-secondary">Ir a Login</button>
        </div>

        <footer className="page-footer">
          <p>Esta es una demostración de página sin protección de autenticación</p>
        </footer>
      </div>
    </div>
  );
};

export default NoProtect;