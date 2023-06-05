import { useContext } from "react";
import { Container, Image, Input, Div, DivLogo,LinkStyled, H1, Button } from "./style";
import { FaSearch } from "react-icons/fa";
import { PokemonContext } from "../../context/PokemonContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const {onInputChange,search, resetForm} = useContext(PokemonContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search',{
            state:search
        })

        resetForm();
    }

    return (
        <div>
            <Container $background={true} $primary={true}>
                <DivLogo>
                    <LinkStyled to={"/"}>
                        <Image src="./pokebola.png" alt="Pokeball" />
                        <H1>Pokedex</H1>
                    </LinkStyled>
                </DivLogo>
                <form onSubmit={handleSubmit}>
                    <Div>
                        <Input
                            type="text"
                            placeholder="Buscar Pokémon"
                            name="search"
                            value={search}
                            onChange={onInputChange}
                        />
                        <Button type="submit">
                        <FaSearch />
                        </Button>
                    </Div>
                </form>
            </Container>
        </div>
    );
};
