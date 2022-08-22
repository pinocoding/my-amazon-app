import "./Admin.css";

function Admin() {
  const context = useContext(DataContext);
  const currentUserName = context.currentUserName;
  const { t } = useTranslation(["common"]);
  return (
    <div>
      <div className="admin"></div>
    </div>
  );
}

export default Admin;
