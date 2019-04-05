using Litium.FieldFramework;
using Litium.Runtime.DependencyInjection;

namespace Litium.Accelerator.FieldTypes.PasswordField
{
    [Service(Name = "PasswordField")]
    internal class PasswordFieldTypeConverter : FieldTypeConverterBase
    {
        public PasswordFieldTypeConverter(FieldTypeMetadataService fieldTypeMetadataService) : base(fieldTypeMetadataService, "PasswordField")
        { }

        public override string EditComponentName => "FieldTypeBag#FieldEditorPassword";
        public override string SettingsComponentName => string.Empty;
    }
}
