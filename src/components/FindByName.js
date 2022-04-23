
function FindByName({search ,setSearch}){

  
   return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <label>Recherche par nom ? : &nbsp;</label><input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
   )
}
  

export default FindByName