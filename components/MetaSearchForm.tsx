export interface Options {
  id: string;
  label: string;
}

export interface MetaSearchFormProps {
  className?: string;
  placeholder: string;
  submitLabel?: string;
  options?: Options[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function MetaSearchForm(props: MetaSearchFormProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <form method="post" className={props.className}>
      <div id="custom-search-input">
        <div className="input-group">
          <input type="text" className="search-query" placeholder={props.placeholder} onChange={onChange} />
          <input type="submit" className="btn_search" defaultValue={props.submitLabel} />
        </div>
      </div>
    </form>
  );
}
