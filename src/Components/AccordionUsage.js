import { styled} from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const StyledAccordionSummary = styled(AccordionSummary)({
  borderBottom:'0.5 solid #0a9466' ,
  borderRight:'0',
  borderLeft:'0', 
  color: '#0a9466', 
  '&.Mui-expanded': {
    minHeight: 48,
    borderRight:'0',
  borderLeft:'0', 
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '0',
    borderBottom:'0',
    borderRight:'0',
    borderLeft:'0', 
  },

});


const StyledAccordionDetails = styled(AccordionDetails)({
  padding: '16px', // Relleno
  borderTop: '0',

  borderRight:'0',
  borderLeft:'0', 
});

function AccordionUsage() {
  return (

  <div>
      <Accordion >
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Qual será meu papel como voluntario?</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Ofrecer atendimento psicológico para pessoas vitimas da tragedia do RS.
          </Typography>
        </StyledAccordionDetails>
      </Accordion>
      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Como vou me conetar com os pacientes?</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
          O seu contato e horaios disponiveis serão encaminado para um Lider das ONGs e ele fará a conexão com o paciente que tiver o mesmo horario disponivel. 
          </Typography>
        </StyledAccordionDetails>
      </Accordion>
      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Onde posso pedir suporte?</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
          Email de suporte          </Typography>
        </StyledAccordionDetails>
      </Accordion>
    </div>

  
  );
}

export default AccordionUsage;

