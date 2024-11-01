import { Link } from 'react-router-dom'
import { contactUsData, navigationData, termAndConditionsData } from './const'
import { Col, Flex, Image, Row, Typography } from 'antd'

import footerModule from './Footer.module.scss'
import cn from 'classnames'
import FooterAction from './Footer.Action'
import { IMAGES_CONST } from '@client/configs'

const { Title, Text } = Typography

const Footer = () => {
  return (
    <>
      {' '}
      <div className={footerModule.footer_wave}>
        <Image
          src={IMAGES_CONST.waveSection}
          alt={IMAGES_CONST.waveSection.toString()}
          preview={false}
        />
      </div>
      <div className={cn(footerModule.footer_container, 'container_fluid')}>
        <div className={footerModule.footer_content}>
          <Row justify="space-between" gutter={[0, 24]}>
            <Col lg={8} md={12} sm={12} xs={24}>
              <Title level={4} className={footerModule.footer__section_title}>
                Navigation
              </Title>
              <Row gutter={[12, 12]} className={footerModule.footer_navigation}>
                {navigationData.map((navData, _index) => (
                  <Col md={8} xs={12} sm={12} key={`navData_${_index}`}>
                    <Link
                      to={navData.path}
                      target={navData?.isExternalLink ? '_blank' : '_self'}
                      className={footerModule.footer_link}
                    >
                      <Text>{navData.title}</Text>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={8} md={12} sm={12} xs={24}>
              <Title level={4} className={footerModule.footer__section_title}>
                contact us
              </Title>
              <Row gutter={[12, 12]} className={footerModule.footer_navigation}>
                {contactUsData.map((data, _index) => (
                  <Col span={24} key={`contactUsData_${_index}`}>
                    <Flex gap={9} align="center">
                      <Image src={data.icon} alt={data.icon} loading="lazy" />
                      <Text>{data.title}</Text>
                    </Flex>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={8} md={12} sm={12} xs={24}>
              <Title level={4} className={footerModule.footer__section_title}>
                Subcribe to receive our latest update
              </Title>
              <FooterAction />
            </Col>
          </Row>
          <div className={footerModule.divider} />
          <div className={footerModule.footer_copyright}>
            <Text>©2023 Tyme - Edit. All Rights reserved.</Text>
            <div className={footerModule.footer_copyright_terms}>
              {termAndConditionsData.map(term => (
                <Link to={term.path} key={term.title}>
                  <Text>{term.title}</Text>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
