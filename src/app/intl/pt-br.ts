import { generalInfo } from '../utils/constants';

export const ptBr = {
  // GENERAL
  contactEmail: generalInfo.emailContact,
  contactUs: 'Contact Us',
  contactLabel: 'Contact',
  headerMenu: 'Menu',
  logo: generalInfo.appName,
  ogImage:
    'https://www.google.com.br/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw3zWqJQAuNyOHVenkS6yB7Q&ust=1667606736635000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKD28a2dk_sCFQAAAAAdAAAAABAD',
  siteName: generalInfo.appName,
  seoOgUrl: 'http://www.superblog.com',
  tileImage:
    'https://www.google.com.br/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=AOvVaw3zWqJQAuNyOHVenkS6yB7Q&ust=1667606736635000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKD28a2dk_sCFQAAAAAdAAAAABAD',

  // MENU AND FOOTER (USER NOT LOGGED)
  signinTitle: 'Entrar',
  signupTitle: 'Comece Aqui',
  toolsMenu: 'Ferramentas',
  injectCookies: 'Injetar Cookies',
  home: 'Home',

  // MENU AND FOOTER (USER LOGGED)
  adminHeaderMenuTitle: 'Menu',
  userBilling: 'Pagamentos',
  userProfile: 'Perfil',
  userSavedPosts: 'Artigos Salvos',
  userSecurity: 'Segurança',
  userSettings: 'Configurações',
  userLogOut: 'Sair',

  // PASSWORD RULES
  passwordMinChar: 'Mínimo de 8 caracteres',
  passwordOneUpperCaseLetter: 'Uma letra maiuscúla',
  passwordOneLowerCaseLetter: 'Uma letra minúscula',
  passwordOneDigit: 'Um número',
  passwordOneSpecialChar: 'Um caracter especial',

  // ADMIN: ALERT BANNER
  alertBannerTitle: 'IMPORTANTE:',
  alertBannerDescription:
    'Por favor complete os seus dados para ter acesso a todas funções',

  // PAGE: ADMIN - BILLING
  seoUserBillingPageTitle: 'Area Financeira',
  seoUserBillingPageDescription: 'Bem vindo a área financeira',
  userBillingTitle: 'Financeiro',
  userBillingTableTitle: 'Contas',
  userBillingTableSelected: 'selecionado',
  userBillingTableDownload: 'baixar',
  userBillingSubscriptionTitle: 'Assinatura',
  userBillingSubscriptionPlan: 'Plano Atual:',
  userBillingSubscriptionUpgradePlan: 'UPGRADE',
  userBillingSubscriptionNextPayment: 'Próximo Pagamento:',
  userBillingCancelSubscriptionCta: 'Cancelar Assinatura',

  // PAGE: ADMIN - PROFILE
  seoUserProfilePageTitle: 'Área de Admin',
  seoUserProfilePageDescription: 'Bem vindo a área de admin',
  userProfileTitle: 'Perfil de Usuário',
  userProfileSubTitlePersonalInformation: 'Personal Information',
  userProfileSubTitleBirthdate: 'Data de Aniversário',
  userProfileSubTitleAddress: 'Address',
  userProfileFirstNameError: 'Por favor insira um nome válido',
  userProfileBirthDateError: 'Por favor insira a sua data de nascimento',
  errorUserProfileUpdateNotEnoughTime:
    'Você só pode atualizar o seu perfil a cada 7 dias. Infelizmente você não pode atualizar agora.',
  errorUserProfileUpdateGeneric:
    'Ops, alguma coisa deu errado. Por favor tente novamente mais tarde.',
  seoUserProfileInfoUpdatedTitle: 'Parabéns',
  seoUserProfileInfoUpdatedDescription: 'Suas informações foram atualizadas!',

  // PAGE: ADMIN - SAVED POSTS
  seoUserSavedPostsPageTitle: 'Área de Admin',
  seoUserSavedPostsPageDescription: 'Bem vindo a área de admin',
  userSavedPostsTitle: 'Artigos Salvos',
  userSavedPostsTableTitle: 'Artigos',
  userSavedPostsTableSelected: 'selecionado',
  userSavedPostsTableDownload: 'removed',

  // PAGE: ADMIN - SECURITY
  seoUserSecurityPageTitle: 'Área de Admin',
  seoUserSecurityPageDescription: 'Bem vindo a área de admin',
  userSecurityTitle: 'Segurança',
  userSecurityResetPasswordCta: 'Trocar Senha',
  userCancelSecurityResetPasswordCta: 'Cancelar Troca de Senha',

  // PAGE: ADMIN - SETTINGS
  seoUserSettingsPageTitle: 'Area de Configurações',
  seoUserSettingsPageDescription: 'Bem Vindo a área de configurações',
  userSettingsTitle: 'Configurações',
  userSettingsSubTitle: 'Idioma',
  userSettingsResetPasswordCta: 'Salvar Idioma Padrão',
  deactivateAccountTitle: 'Desativar Conta',
  deactivateAccountCta: 'Desativar Conta',
  cancelDeactivateAccountCta: 'Cancel Desativação',
  step01Title: 'Passo 01',
  step01Instruction: 'Slide the button to the end.',
  step02Title: 'passo 02',
  step02Instruction: 'Insira a palavra %s e aperte DESATIVAR CONTA',
  step02SpecialWord: 'desativar',
  step02ErrorMessage: 'Por favor insira a palavra correta',

  // PAGE: CONTACT US
  seoContactUsPageTitle: 'Contato',
  seoContactUsPageDescription: 'Contato',
  seoContactUsPageKeywords: 'contato, fale conosco, mensagem',
  contactUsTitle: 'Contato',
  contactUsSubTitle: 'Envie a sua mensagem',
  subjectContactUsForm: 'Assunto',
  subjectErrorContactUsForm: 'Por favor insira um assunto',
  textContactUsForm: 'Texto',
  textErrorContactUsForm: 'Por favor insira um texto',
  ctaContactUsForm: 'Enviar messagem',
  ctaContactUsSuccessTitle: 'Mensagm enviada.',
  ctaContactUsSuccesDescription:
    'O nosso time retornará a sua mensagem o mais rápido possível.',
  formErrorContactUsFormTitle: 'Ops :(',
  formErrorContactUsFormDescription:
    'Alguma coisa deu errada. Por favor tente mais tarde ou mandei email para: %s',

  // PAGE: FORGET PASSWORD
  seoForgetPasswordPageTitle: 'Esqueci a minha senha',
  seoForgetPasswordDescription: 'Esqueci a minha senha',
  seoForgetPasswordKeywords: 'senha, esqueci a senha, recuperar a senha',
  verificationEmailFormTitle: 'Por favor verifique o seu email',
  verificationCodeFormTitle:
    'Por favor insira o código enviado para o e-mail e a nova senha',

  // PAGE: HELP CENTER
  seoHelpCenterPageTitle: 'Centro de Ajuda',
  seoHelpCenterDescription: 'Centro de Ajuda',
  seoHelpCenterKeywords: 'central de ajuda, ajuda, fale conosco',
  helpCenterTitle: 'Centro de Ajuda',

  // PAGE: HOME
  seoHomePageTitle: 'Super Blog Home Page',
  seoHomePageDescription: 'Super Blog Home Page',
  seoHomePageKeywords: 'super blog',

  // PAGE: LINKS
  seoTopAppsPageTitle: 'Melhores Links',
  seoTopAppsPageDescription: 'Lista dos Melhores Links',
  seoTopAppsPageKewords: 'links, app, apps, melhores apps, melhores links',

  // PAGE: LOADING
  seoLoadingPageTitle: 'Lendo a página',
  seoLoadingPageDescription: 'Lendo a página',
  pageLoadingText: 'Lendo...',

  // PAGE: POST
  notSubscriber: 'Ainda não é memebro ?',
  subscribeCTA: 'Inscreva-se Agora',
  otherPosts: 'Outros Artigos',
  relatedPosts: 'Artigos Relacionados',
  otherTopicsToPost: 'Outros Tópicos',
  morePosts: 'Outros Artigos',

  // PAGE: SIGN IN
  seoSigninPageTitle: 'Entrar',
  seoSigninPageDescription: 'Entrar no app',
  seoSigninPageKeywords: 'signin, sign in',
  singInFormTitle: 'Entrar',

  // PAGE: SIGN UP
  seoSignupPageTitle: 'Criar conta',
  seoSignupPageDescription: 'Crie a sua conta no melhor sistema de internet',
  seoSignupPageDKeywords: 'conta, crie sua conta, registrar',
  signupFormTitle: 'Criar conta',
  signUpSubmitCta: 'Criar conta',
  verifyCodeText:
    'Clique aqui se você tem uma conta e só precisa verificar o seu email.',

  // PAGE: VERIFY CODE
  seoVerifyCodePageTitle: 'Entrar',
  seoVerifyCodePageDescription: 'Entrar no app',
  verifyCodeFormTitle: 'Verifique o seu código',
  sendCodeAgainLabel: 'Clique aqui para reenviar o código.',
  emailFormTitle: 'Por favor insira o seu email',

  // PAGE: TOOLS -> INJECT COOKIES
  seoToolsInjectCookiesTitle: 'Injetar Cookies',
  seoToolsInjectCookiesDescription: 'Injetar Cookies',
  seoToolsInjectCookiesKeywords:
    'cookies, injetar cookies, ferramentas, black hat',
  toolsInjectCookiesTitle: 'Injetar Cookies',
  toolsInjectCookiesFirstStep: 'Selecione os Paises',
  toolsInjectCookiesSecondStep: 'Selecione a Quantidade de Cookies',
  toolsInjectCookiesAvailableQuanitity: 'Total de  cookies disponíveis:',
  toolsInjectCookiesCta: 'Abrir websites',
  toolsInjectCookiesCtaLoading: 'Abrindo...',

  // PAGE: TOPICS
  seoTopicsPageTitle: 'Topicos',
  seoTopicsPageDescription: 'Descubra mais usando tópicos',
  seoTopicsPageDKeywords: 'tópicos, conteúdo',

  // FORM LABELS
  emailInputLabel: 'Por favor insira o seu email',
  passwordInputLabel: 'Senha',
  firstNameLabelInputLabel: 'Primeiro Nome',
  lastNameLabelInputLabel: 'Último nome',
  dayInputLable: 'Dia',
  monthInputLable: 'Mês',
  yearInputLable: 'Ano',
  countryInputLable: 'País',
  stateProvinceInputLable: 'Estado/Província',
  codeInputLabel: 'Código',
  forgetPasswordLabel: 'Esqueci a minha senha',

  // YEARS
  january: 'Janeiro',
  february: 'Fevereiro',
  march: 'Março',
  april: 'Abril',
  may: 'Maio',
  june: 'Junho',
  july: 'Julho',
  august: 'Agosto',
  september: 'Setembro',
  october: 'Outubro',
  november: 'Novembro',
  december: 'Dezembro',

  // FORM CTAs
  submitCtaLoading: 'Carregando...',
  saveCtaLabel: 'Salvar',
  saveCtaLoadingLabel: 'Salvando...',
  logOutCtaLabel: 'Sair',
  logOutLoadingCtaLabel: 'Fechando o app...',
  sendCtaLabel: 'Enviar',
  sendLoadingCtaLabel: 'Enviando...',

  // ALERT
  codeSentAlertTitle: 'Código enviado para o seu email.',
  codeSentAlertDescription: 'Por favor use o código para validar o seu email.',
  accountVerifiedAlertTitle: 'Conta verificada!',
  accountVerifiedAlertDescription: 'Faça o login para acessar a sua conta.',
  passwordChangedAlerTitle: 'Senha Atualizada!',
  passwordChangedAlertDescription: 'Faça o login para acessar a sua conta.',
  accountCreatedSuccessAlertTitle: 'Conta Criada!',
  accountCreatedSuccessAlertDescription: 'Código enviado para o seu email.',
  userNotConfirmedAlertTitle: 'Email ainda não confirmado.',
  userNotConfirmedAlertDescription: 'Por favor insira o código envido',
  codeSuccessAlertTitle: 'Código reenviado.',
  codeSuccessAlertDescription:
    'Por favor verifique o seu email - includindo a sua caixa de spam',

  // ERROR BOUNDARY
  errorBoundaryTitle: 'Oops... :(',
  errorBoundaryDescription:
    'Alguma coisa deu errado. Por favor atualize a página ou vá para a home clicando na logo no topo a esquerda.',

  // FORM SPECIFIC ERROR MESSAGES
  emailErrorMessage: 'Please insert a valid email.',
  passwordErrorMessage: 'Please insert a valid password.',
  codeErrorMessage: 'Código errado. Por favor insira o código correto.',
  loginErrorMessage: 'Email e/ou senha errados!',

  // FORM GENERAL ERRORS MESSAGE
  generalErrorMessage:
    'Ops, alguma coisa deu errado. Por favor atualize a página ou tente mais tarde!',
  generalEmailErrorMessage:
    'Erro ao validar o seu email email. Por favor tente novamente.',
  generalPasswordErrorMessage:
    'Ops, alguma coisa deu errado. Por favor atualize a página ou tente mais tarde ou entre em contato!',

  // LANGUAGE
  language: 'Idioma',
  lngPortuguese: 'Português',
  lngEnglish: 'Inglês',

  // COUNTRIES
  allCountries: 'All',
  brazil: 'Brasil',
  unitedStates: 'Estados Unidos',

  // COMPONENT TRENDING POSTS
  trendingPostsTitle: 'Posts Em Destaque',

  // COMPONENT FEED POSTS
  feedPostsTitle: 'Nosso Feed',
  viewMorePosts: 'Find out much more',

  // COMPONENT TAG BOX
  tagBoxTitle: 'Descubra Mais',
};
