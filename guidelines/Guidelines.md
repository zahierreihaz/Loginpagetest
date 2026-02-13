
## Fluent Design References

- Always refer to the **Fluent 2 guidelines**:  
  https://fluent2.microsoft.design/

## Packages & Dependencies

### Core UI Libraries
- Use React components from 9.46.2 version:  
  https://www.npmjs.com/package/@fluentui/react-components
- Use icons from:  
  https://www.npmjs.com/package/@fluentui/react-icons

### Date & Time Components
- When calendar, date picker, or time picker components are required, add the following packages:
  - `@fluentui/react-calendar-compat`
  - `@fluentui/react-datepicker-compat`
  - `@fluentui/react-timepicker-compat`

## Application Setup

- Always wrap the application in a `FluentProvider` using `webLightTheme`.
- Always code directly in `app.tsx`.

## Typography & Styling

- Import and prioritize **Fluent UI typography presets** before using Fluent UI `makeStyles` and tokens.
- Use Fluent UI `makeStyles` layout utilities and tokens for **all spacing and colors**, when needed.
- For **Subtle buttons**, use the **Body1** typography preset for the button text.

## Restrictions & Validation

- **DO NOT** use Radix UI (`@radix-ui`) components.
- **DO NOT** use Lucide icons.
- **DO NOT** use Tailwind utility classes for layout.
- Always validate that the generated code follows the **Fluent UI codebase conventions**.
- 
###TEst line
