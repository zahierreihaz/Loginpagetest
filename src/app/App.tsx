import {
  FluentProvider,
  webLightTheme,
  makeStyles,
  tokens,
  Input,
  Button,
  Label,
  Card,
  Text,
  Body1,
  Title3,
  Field,
} from '@fluentui/react-components';
import { PersonRegular, LockClosedRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground3,
    padding: tokens.spacingVerticalXXXL,
  },
  loginCard: {
    width: '100%',
    maxWidth: '400px',
    padding: tokens.spacingVerticalXXXL,
  },
  header: {
    textAlign: 'center',
    marginBottom: tokens.spacingVerticalXXL,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  buttonContainer: {
    marginTop: tokens.spacingVerticalM,
  },
  footerText: {
    textAlign: 'center',
    marginTop: tokens.spacingVerticalL,
  },
});

export default function App() {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.container}>
        <Card className={styles.loginCard}>
          <div className={styles.header}>
            <Title3>Sign In</Title3>
            <Body1>Enter your credentials to continue</Body1>
          </div>

          <form className={styles.form}>
            <Field label="Email">
              <Input
                type="email"
                placeholder="Enter your email"
                contentBefore={<PersonRegular />}
              />
            </Field>

            <Field label="Password">
              <Input
                type="password"
                placeholder="Enter your password"
                contentBefore={<LockClosedRegular />}
              />
            </Field>

            <div className={styles.buttonContainer}>
              <Button appearance="primary" style={{ width: '100%' }}>
                Sign In
              </Button>
            </div>
          </form>

          <div className={styles.footerText}>
            <Body1>Don't have an account? Sign up</Body1>
          </div>
        </Card>
      </div>
    </FluentProvider>
  );
}
