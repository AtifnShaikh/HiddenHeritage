export default function HeritageCard({ site }) {
  return (
    <div className="heritage-card">
      <img src={site.image} alt={site.name} />
      <h3>{site.name}</h3>
      <p><strong>Region:</strong> {site.region}</p>
      <p>{site.description}</p>
      <iframe 
        src={site.mapLink} 
        width="100%" 
        height="200" 
        title="map" 
        style={{ border: 0 }}
      ></iframe>
      <div className="vlog">
        <iframe 
          width="100%" 
          height="200" 
          src={site.vlogLink} 
          title="Vlog" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
