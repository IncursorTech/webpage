// Create video preview section for home page
// Use react-player to play video
// Use styled-components to style the video
import CustomContainer from 'components/CustomContainer';
import MetaSkillForm from 'components/MetaSkillForm';
import styled from 'styled-components';
const MetaSkillFormItems = [
    {
        title: 'Form Section',
        href: '#',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
        image: 'Bussines.png',
        background: false,
    },
    {
        title: 'Online Doctor',
        href: '#',
        description: `Online bir şekilde doktordan randevu alıp yüzyüze görüşmek istemezmisiniz?`,
        image: 'doctor_PNG16022.png',
        background: true,
    },
    {
        title: 'Health Assistant',
        href: '#',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
        image: 'call-center.png',
        background: false,
    },
];
// `col-md-4`
export default function SkillSection({ column, subColumn }) {
    return (<div>
      <div className="row">
        <div className={column}>
          <MetaSkillFormContainer>
            <div className="row">
              {MetaSkillFormItems.map((MetaItem, index) => (<div key={index} className={subColumn}>
                  <MetaSkillForm title={MetaItem.title} image={MetaItem.image} description={MetaItem.description} bgColor={MetaItem.background}/>
                </div>))}
            </div>
          </MetaSkillFormContainer>
        </div>
      </div>
    </div>);
}
const MetaSkillFormContainer = styled(CustomContainer) `
  z-index: 0;
  max-width: 170em;
  background-color: #e4e6eb;
  padding: 5px;
  border: white 10px solid;
  border-radius: 30px;
  -webkit-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  -moz-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
`;
