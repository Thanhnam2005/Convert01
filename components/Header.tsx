import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`

interface HeaderProps {
  toggleTheme: () => void
  theme: string
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <StyledHeader>
      <div className="container">
        <HeaderContent>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo>ImageToPDF</Logo>
          </motion.div>
          <ThemeToggle onClick={toggleTheme} aria-label="Chuyển đổi chế độ tối/sáng">
            {theme === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
        </HeaderContent>
      </div>
    </StyledHeader>
  )
}

export default Header

