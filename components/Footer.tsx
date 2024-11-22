import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem 0;
`

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const FooterSection = styled(motion.div)`
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
`

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="container">
        <FooterContent>
          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FooterTitle>ImageToPDF</FooterTitle>
            <p>Chuyển đổi ảnh sang PDF chuyên nghiệp</p>
          </FooterSection>
          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FooterTitle>Liên kết</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink href="#hero">Trang chủ</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="#features">Tính năng</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="#converter">Chuyển đổi</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>
          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FooterTitle>Liên hệ</FooterTitle>
            <p>Email: support@imagetopdf.com</p>
            <p>Điện thoại: (123) 456-7890</p>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <p>&copy; 2023 ImageToPDF. Bảo lưu mọi quyền.</p>
        </FooterBottom>
      </div>
    </StyledFooter>
  )
}

export default Footer

