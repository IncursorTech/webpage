export default function MetaSearchForm(props) {
    const onChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    };
    return (<form method="post" className={props.className}>
      <div id="custom-search-input">
        <div className="input-group">
          <input type="text" className="search-query" placeholder={props.placeholder} onChange={onChange}/>
          <input type="submit" className="btn_search" defaultValue={props.submitLabel}/>
        </div>
      </div>
    </form>);
}
