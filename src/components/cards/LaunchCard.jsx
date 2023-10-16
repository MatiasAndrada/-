import React from 'react';


const LaunchCard = ({ id, name, img, launch_date_utc, launch_success }) => {
  const formattedDate = launch_date_utc
    ? new Date(launch_date_utc).toLocaleDateString()
    : "No date";

  return (
    <>
      <li className="link-card">
        <a href={`/launches/${id}`} className="card-link">
          <img className="card-image" src={img} alt={name} />
          <div className="card-content">
            <div className="info">
              <h2 className="text-white text-md md:text-xl">{name}</h2>
              <p className="text-sm md:text-md text-center">{formattedDate}</p>
            </div>
            <div className="status">
              {launch_success ? (
                <p className="success">Success</p>
              ) : (
                <p className="failure">Failure</p>
              )}
            </div>
          </div>
        </a>
      </li>
      <style>{`
  .link-card {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px;
    margin: 4px;
    background-color: #334155;
    background-image: none;
    background-size: 400%;
    border-radius: 7px;
    background-position: 100%;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: inset 0 0 0 1px rgba(21, 20, 20, 0.538);
  }

  .card-link {
    text-decoration: none;
    position: relative;
    display: block;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .card-image {
    max-width: 350px;
    min-width: 150px;
    padding: 1em;
    padding-top: 60px;
    margin: auto;
    object-fit: cover;
  }

  .card-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    padding: 10px;
    box-sizing: border-box;
  }

  .info {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.671);
    padding: 5px;
    border-radius: 5px;
  }

  .status {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .success {
    background-color: green;
    color: white;
    border-radius: 50px;
    display: inline-block;
    padding: 6px 12px;
    font-size: 18px;
  }

  .failure {
    background-color: red;
    color: white;
    border-radius: 50px;
    display: inline-block;
    padding: 6px 12px;
    font-size: 18px;
  }

  .link-card:is(:hover, :focus-within) {
    background-position: 0;
    background-image: var(--accent-blue-white);
  }

  .link-card:is(:hover, :focus-within) .text-accent {
    color: var(--accent-blue);
  }

  @media (max-width: 768px) {
    .link-card {
      width: 45%; /* Ajusta el ancho de la tarjeta para dispositivos medianos */
    }
  }
  @media (max-width: 480px) {
    .link-card {
      width: 100%; /* Ocupa todo el ancho en dispositivos pequeños */
    }
    .status {
      bottom: 0;
      right: 10px;
      top: 10px;
      padding: 4px, 8px;
    }
    .success {
      font-size: 1em;
    }
    .failure {
      font-size: 1em;
    }
  }`}
      </style>
    </>
  );
};



export default LaunchCard;
