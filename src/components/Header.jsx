import ChefLogo from "../assets/chef-claude-icon.png";
export default function Header() {
  return (
    <header>
            <img src={ChefLogo} alt="Chef BPSD" />
            <h1><strong>Chef BPSD</strong></h1>
    </header>
  );
}