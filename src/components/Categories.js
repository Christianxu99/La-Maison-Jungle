import '../styles/Categories.css'

function Categories({ updateActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<span>Recherche par catégorie ? </span>
			<select
				value={activeCategory}
				onChange={(e) => updateActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''></option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => updateActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories