// Create video preview section for home page
// Use react-player to play video
// Use styled-components to style the video
import CustomContainer from 'components/CustomContainer';
import MetaSkillForm from 'components/MetaSkillForm';
import styled from 'styled-components';
export default function SkillSection({ type, column, href, formItems, buttonText }) {
    return (<MainContainer>
      <MetaSkillFormContainer>
        <div className="row">
          {formItems.map((item, index) => (<div key={index} className={`col-md-${12 / column}`}>
              <MetaSkillForm title={item.title} image={item.image} description={item.description} bgColor={item.background} buttonText={buttonText} href={`${href}?${type ? `type=${type}` : ''}${index != null ? `&key=${index}` : ''}`} type={type} keyNumber={index}/>
            </div>))}
        </div>
      </MetaSkillFormContainer>
    </MainContainer>);
}
const MetaSkillFormContainer = styled(CustomContainer) `
  max-width: 170em;
  z-index: 0;

  background-color: rgba(255, 255, 255, 1);
  padding: 2rem;
  -webkit-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  -moz-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
`;
const SearchAreaContainer = styled(CustomContainer) `
  padding: 5rem;
  width: 100%;
  height: 100%;
  background: linear-gradient(150deg, rgba(9, 160, 240, 1) 0%, rgba(34, 77, 156, 1) 100%);
  p {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    text-align: justify;
    min-height: 17rem;
  }
  h3 {
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 1.1;
    text-align: right;
    margin-top: 5rem;
    margin-bottom: 5rem;
    color: white;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: light;
    line-height: 1.1;
    text-align: lesft;
    margin-bottom: 1rem;
    color: white;
  }
`;
const MainContainer = styled(CustomContainer) `
  max-width: 190em;
`;
