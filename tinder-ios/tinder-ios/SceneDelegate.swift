import Turbo
import UIKit

private let rootURL = URL(string: "http://localhost:3000")!

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?
    
    let pathConfiguration = PathConfiguration(sources: [
      .file(Bundle.main.url(forResource: "path-configuration", withExtension: "json")!)
    ])

    private lazy var navigator = TurboNavigator(pathConfiguration: pathConfiguration)

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let _ = (scene as? UIWindowScene) else { return }

        window!.rootViewController = navigator.rootViewController
        navigator.route(rootURL)
    }
}
