import Initial from "./Initial";
import { AuthProvider } from "./src/hooks/useAuth";

export default function App() {
  return (
    <AuthProvider>
      <Initial />
    </AuthProvider>
  );
}
